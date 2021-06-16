const FollowToggle = require("./follow_toggle")

const $buttons = $("button.follow-toggle");

$buttons.each(index, function(btn) {
  new FollowToggle(btn);
})

