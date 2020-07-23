let viewWidth = ($(window).width() * .9)
let viewHeight = (viewWidth * .562)

new Twitch.Embed("twitch-embed", {
    width: viewWidth,
    height: viewHeight,
    channel: "jumpingterror"
})