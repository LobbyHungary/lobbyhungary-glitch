const { VoiceState } = require('discord.js')

module.exports = {
    name: "voiceStateUpdate",
    /**
     * @param {VoiceState} oldState 
     * @param {VoiceState} newState 
     */
    execute(oldState, newState) {
        const tempRole = oldState.guild.roles.cache.get('1079423591579406477')
        const member = oldState.guild.members.cache.get(oldState.id)

        let oldChannel = oldState.channelId;
        let newChannel = newState.channelId;

        if (newChannel === null) {
            if (oldState.channel.members.first() || member.roles.cache.has(tempRole)) {
                oldState.channel.members.first().roles.add(tempRole)
            }

            member.roles.remove(tempRole)

        } else if (oldChannel !== null && newChannel !== null && (newChannel !== oldChannel)) {
            if (oldState.channel.members.first() || member.roles.cache.has(tempRole)) {
                oldState.channel.members.first().roles.add(tempRole)
            }

            member.roles.remove(tempRole)
        }
    }
}