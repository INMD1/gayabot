const {SlashCommandBuilder} = require('@discordjs/builders');
const {see} = require('../jsonfile/config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('nkch')
		.setDescription('상대방의 이름을 바꿀수 있서요!')
        .addUserOption(option =>
            option.setName('user')
            .setDescription('이름을 바꿀 유저를 선택해주세요.')
            .setRequired(true)),
	async execute(interaction) {
		const user = interaction.options.getUser('user');
        console.log(` 바꿀 대상: 이름: ${user.username} ID:  ${user.id}`);
        try {
            
        } catch (error) {
            
        }
	},

};
