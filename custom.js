/* Serenade Custom Commands

In this file, you can define your own custom commands with the Serenade API.

For instance, here's a custom automation that opens your terminal and runs a command:


And, here's a Python snippet for creating a test method:

serenade.language("python").snippet(
  "test method <%identifier%>",
  "def test_<%identifier%>(self):<%newline%><%indent%>pass",
  { "identifier": ["underscores"] }
  "method"
);

For more information, check out the Serenade API documentation: https://serenade.ai/docs/api

*/

serenade.global().command("make", async api => {
  await api.focusOrLaunchApplication("terminal");
  await api.typeText("make clean && make");
  await api.pressKey("return");
});

serenade.app("terminal").command("list", async api => {
  await api.typeText("ls ");
  await api.pressKey("return");
})

serenade.app("terminal").command("where", async api => {
  await api.typeText("pwd");
  await api.pressKey("return");
})

serenade.app("terminal").command("cd", async api => {
  await api.typeText("cd ");
})

serenade.app("terminal").command("go up", async api => {
  await api.typeText("cd ..");
  await api.pressKey("return");
})

serenade.app("terminal").command("go back", async api => {
  await api.typeText("cd -");
  await api.pressKey("return");
})

serenade.app("terminal").command("tab", async api => {
  await api.pressKey("tab");
})

serenade.global().command("git add", async api => {
  await api.focusOrLaunchApplication("terminal");
  await api.typeText("git add ");
  await api.pressKey("return");
})

serenade.global().command("git add", async api => {
  await api.focusOrLaunchApplication("terminal");
  await api.typeText("git add ");
  await api.pressKey("return");
})

serenade.global().command("git add u", async api => {
  await api.focusOrLaunchApplication("terminal");
  await api.typeText("git add -u");
  await api.pressKey("return");
})

serenade.global().command("git push", async api => {
  await api.focusOrLaunchApplication("terminal");
  await api.typeText("git push ");
})

serenade.global().command("git commit <%text%>", async (api, matches) => {
  await api.focusOrLaunchApplication("terminal");
  await api.typeText("git commit -m \" "); 
  await api.typeText(matches.text);
  await api.typeText("\"")
})

serenade.app("safari").command("find <%text%>", async (api, matches) => {
  await api.pressKey("f", ["command"]);
  await api.typeText(matches.text);
});

/* Granular movements */ 
serenade.app("code").command("ah", async (api, matches) => {
  await api.pressKey("up");
}, {autoExecute: true});

serenade.app("code").command("oh", async (api, matches) => {
  await api.pressKey("down");
}, {autoExecute: true});

serenade.app("code").command("e", async (api, matches) => {
  await api.pressKey("right");
}, {autoExecute: true});

serenade.app("code").command("i", async (api, matches) => {
  await api.pressKey("left");
}, {autoExecute: true});

/* Option movements*/ 
serenade.app("code").command("right", async (api, matches) => {
  await api.pressKey("right", ["option"]);
}, {autoExecute: true});

serenade.app("code").command("left", async (api, matches) => {
  await api.pressKey("left", ["option"]);
}, {autoExecute: true});

/* Bulk movements */
serenade.app("code").command("up", async (api, matches) => {
  await api.pressKey("up", [], 3);
}, {autoExecute: true});

serenade.app("code").command("down", async (api, matches) => {
  await api.pressKey("down", [], 3);
}, {autoExecute: true});

serenade.app("code").command("the", async (api, matches) => {
  await api.pressKey("right", ["command"]);
}, {autoExecute: true});

serenade.app("code").command("by", async (api, matches) => {
  await api.pressKey("left", ["command"]);
}, {autoExecute: true});

serenade.app("code").command("search <%text%>", async (api, matches) => {
  await api.pressKey("p", ["command"]);
  await api.typeText(matches.text);
}, {autoExecute: true});

serenade.language("javascript").snippet(
  "code command <%identifier%>",
  "serenade.app(\"code\").command(\"<%identifier%>\", async (api, matches) => {<%newline%><%indent%><%newline%>});",
  { "identifier": ["camelcase"] },
);

serenade.app("code").command("commander", async (api, matches) => {
  await api.pressKey("k", ["command"]);
  await api.pressKey("s", ["command"]);
});

serenade.app("code").command("jump", async (api, matches) => {
  await api.pressKey("f12", []);
});
 
function get() {
}

get()