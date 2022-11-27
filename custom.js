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

serenade.global().command("make", api => {
  api.focusOrLaunchApplication("terminal");
  api.typeText("make clean && make");
  api.pressKey("return");
});

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
  await api.pressKey("right", ["option"]);
}, {autoExecute: true});

serenade.app("code").command("i", async (api, matches) => {
  await api.pressKey("left", ["option"]);
}, {autoExecute: true});

/* Bulk movements */
serenade.app("code").command("up", async (api, matches) => {
  await api.pressKey("up", [], 10);
}, {autoExecute: true});

serenade.app("code").command("down", async (api, matches) => {
  await api.pressKey("down", [], 10);
}, {autoExecute: true});

serenade.app("code").command("the", async (api, matches) => {
  await api.pressKey("right", ["command"]);
}, {autoExecute: true});

serenade.app("code").command("by", async (api, matches) => {
  await api.pressKey("left", ["command"]);
}, {autoExecute: true});


serenade.global().command("git add", api => {
  api.focusOrLunchApplication("terminal");

})

serenade.global().command("commit", api => {
  api.focusOrLunchApplication("terminal");

})
