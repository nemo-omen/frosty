import { Context, Hono } from 'hono';
import { validator } from 'hono/validator';
import { z } from 'zod';
import { Login } from './view/Login';
import { Signup } from './view/Signup';
import { AuthResult, getUserByEmail, insertUser, authenticateUser, userExists } from './user.service';


const app = new Hono();

/* VALIDATION SCHEMA */
const loginFormSchema = z.object({
  email: z.string().email("No valid email provided."),
  password: z.string().min(6, "Password must be at least 6 characters long.")
});

const signupFormSchema = z.object({
  email: z.string().email("No valid email provided."),
  password: z.string().min(6, "Password must be at least 6 characters long."),
  confirm: z.string()
}).superRefine(({ confirm, password }, ctx) => {
  if (confirm !== password) {
    ctx.addIssue({
      code: 'custom',
      message: 'The passwords do not match.'
    });
  }
});

interface LoginFormData {
  email: string;
  password: string;
}

interface SignupFormData {
  email: string;
  password: string;
  confirm: string;
}

/* ROUTES */
app.get('/login', (c: Context) => Login(c));
app.get('/signup', (c: Context) => Signup(c));

app.post(
  '/login',
  validator('form', (value, c) => {
    const result = loginFormSchema.safeParse(value);
    if (!result.success) {
      const issues = result.error.issues;
      // console.log({ issues });
      return c.json({ ok: false, errors: issues.map((i) => i.message) }, 401);
    }
    return result.data;
  }),
  async (c: Context) => {
    const data: LoginFormData = c.req.valid('form');
    const { email, id, isAuthed } = await authenticateUser(data, c);
    if (!isAuthed) {
      // TODO: Flash bad password message!
      return c.redirect('/auth/login');
    }
    // TODO: Set new Home route
    const session = c.get('session');
    session.set('userEmail', email);
    session.set('userId', id);
    return c.redirect('/');
  }
);

app.post(
  '/signup',
  validator('form', (value, c) => {
    const result = signupFormSchema.safeParse(value);
    if (!result.success) {
      const issues = result.error.issues;
      return c.json({ ok: false, errors: issues.map((i) => i.message) }, 401);
    }
    return result.data;
  }),
  async (c: Context) => {
    const data: SignupFormData = c.req.valid('form');
    const exists = userExists(data.email);
    const userdata = { email: data.email, password: data.password };
    if (!exists) {
      const insertResult = await insertUser(userdata);
      // confirmation email???
      return c.redirect('/auth/login');
    }
    // need to get id from insert result?
    // Attempt to create user
    //  - Check db for email
    //    - reject if exists
    //    - persist if not
    //  - Redirect to login
    // -- flash email confirm message
    return c.redirect('/auth/login');
  }
);

app.post('/logout', (c: Context) => {
  const session = c.get('session');
  session.deleteSession();
  return c.redirect('/');
});
export default app;