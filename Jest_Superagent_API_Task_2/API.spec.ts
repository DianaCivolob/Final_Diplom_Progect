// @ts-ignore
import superagent from "superagent";

describe("getMethod", function () {
    it("title", async () => {
        const response = await superagent.get(
            "https://jsonplaceholder.typicode.com/posts/3"
        );
        const title = "ea molestias quasi exercitationem repellat qui ipsa sit aut";
        expect(response.body.title).toMatch(
            "ea molestias quasi exercitationem repellat qui ipsa sit aut"
        );
    });
    it("status", async () => {
        const response = await superagent.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        expect(response.status).toBe(200);
    });
    it("postNotExist", async () => {
        try {
            const response = await superagent.get(
                "https://jsonplaceholder.typicode.com/posts/200"
            );
        } catch (error: any) {
            expect(error.status).toBe(404);
        }
    });
});
describe("postMethod", function () {
    it("createPost", async () => {
        const response = await superagent
            .post("https://jsonplaceholder.typicode.com/posts")
            .send({ title: "Automation", body: "Test", userId: 98 })
            .set("Content-Type", "application/json");
        expect(response.status).toBe(201);
        expect(response.body.title).toBe("Automation");
        expect(response.body.body).toBe("Test");
        expect(response.body.userId).toBe(98);
    });
    it("createError", async () => {
        try {
            const response = await superagent
                .post("https://jsonplaceholder.typicode.com/posts")
                .send({})
                .set("Content-Type", "application/json");
        } catch (error: any) {
            expect(error.status).toBe(404);
            expect(error.body).toEqual(undefined);
        }
    });
});
describe("putMethod", function () {
    it("updateComment", async () => {
        const response = await superagent
            .put("https://jsonplaceholder.typicode.com/comments/4")
            .send({ name: "Manager", email: "Manager@test.com" })
            .set("Content-Type", "application/json");
        expect(response.status).toBe(200);
        expect(response.body.name).toBe("Manager");
        expect(response.body.email).toBe("Manager@test.com");
    });
    it("Error", async () => {
        try {
            const response = await superagent
                .put("https://jsonplaceholder.typicode.com/comments/600")
                .send({ name: "Manager", email: "Manager@test.com" })
                .set("Content-Type", "application/json");
        } catch (error: any) {
            expect(error.status).toBe(500);
        }
    });
});
describe("patchMethod", function () {
    it("Photo", async () => {
        const response = await superagent
            .patch("https://jsonplaceholder.typicode.com/photos/505")
            .send({ thumbnailUrl: "https://via.placeholder.com/150/1cb49b" })
            .set("Content-Type", "application/json");
        expect(response.status).toBe(200);
        expect(response.body.thumbnailUrl).toBe(
            "https://via.placeholder.com/150/1cb49b"
        );
    });
    it("Error", async () => {
        try {
            const response = await superagent
                .patch("https://jsonplaceholder.typicode.com/photos/900")
                .send({ title: "Manager" })
                .set("Content-Type", "application/json");
        } catch (error: any) {
            expect(error.status).toBe(500);
        }
    });
});
describe("deleteMethod", function () {
    it("Error", async () => {
        try {
            const response = await superagent.delete(
                "https://jsonplaceholder.typicode.com/comments/455"
            );
        } catch (error: any) {
            expect(error.status).toBe(404);
        }
    });
    it("Post", async () => {
        const response = await superagent.delete(
            "https://jsonplaceholder.typicode.com/posts/69"
        );
        expect(response.status).toBe(200);
        expect(response.body).toEqual({});
    });
});
