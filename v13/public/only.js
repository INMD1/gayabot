const {SlashCommandBuilder} = require('@discordjs/builders');
const {target} = require('../jsonfile/config.json');

//카운트
var time = 53

//시간
const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");
var date = moment().format('MM-DD');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('loop')
        .setDescription('누군가의 이름을 반복적으로 변경한다')
        .addStringOption(option => option
            .setName('go')
            .addChoice('yes', 'yesyesyesyesyes')
            .setRequired(true)),
    async execute(interaction) {   
            const userdata = await interaction.guild.members.fetch(target);
            console.log(userdata);
    }
}