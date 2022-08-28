events.listen('ftbquests.custom_reward', function (event) {
  let reward = event.getReward()

  if (reward.hasTag('job_reward')) {
    event.server.schedule(10, event.server, function (callback) {
      callback.data.runCommandSilent(`/gamestage add ${event.player.toString()} ${reward.quest.title.toLowerCase()}`)
    })
  }
})