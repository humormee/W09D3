function FollowToggle(el) {
  this.$el = $(el);
  this.userId = this.$el.data('user-id');
  this.followState = this.$el.data('initial-follow-state');
  render();
}

function render() {
  this.followState === "Follow!" ? this.$el.text("Unfollow!") : this.$el.text("Follow!");
}

function handleClick(event){
  event.preventDefault();


  if (this.followState === 'followed') {
    this.followState = 'unfollowing';
    $.ajax({
      method: 'DELETE',
      url: '/users/:id/follow'
    })
  } else {
    this.followState = 'following';
    $.ajax({
      method: 'POST',
      url: '/users/:id/follow',
      data: {

      }

    })
  }
}

module.exports = FollowToggle;