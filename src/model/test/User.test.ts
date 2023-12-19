import { beforeAll, describe, expect, it } from "bun:test";
import { User } from "../User";

describe("User", () => {
  it("should create a new user and generate id", () => {
    const user = new User("John Doe", "john@doe.com", "123456");
    expect(user.name).toBe("John Doe");
    expect(user.email).toBe("john@doe.com");
    expect(user.id).toBeDefined();
    expect(user.password).toBeDefined();
  });

  it("should create a new user with id", () => {
    const user = new User("John Doe", "john@doe.com", "123456", "abc123");
    expect(user.name).toBe("John Doe");
    expect(user.email).toBe("john@doe.com");
    expect(user.id).toBe("abc123");
    expect(user.password).toBeDefined();
  });
});