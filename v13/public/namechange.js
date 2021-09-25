const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('nkch')
		.setDescription('상대방의 별명을 바꿀수 있서요!')
        .addUserOption(option =>
            option.setName('user')
            .setDescription('이름을 바꿀 유저를 선택해주세요.')
            .setRequired(true))
        .addStringOption(option =>
            option.setName('string')
            .setDescription('바꿀 별명을 입력해주세요.')
            .setRequired(true)),
	async execute(interaction) {
		const user = await interaction.options.getUser('user');
        const NickUser = await interaction.guild.members.fetch(user)
        const data = interaction.options.getString('string');

        console.log(` 바꿀 대상: 이름: ${user.username} ID:  ${user.id} 변경할 이름: ${data}`); 

        await NickUser.setNickname(data).catch(err => console.log(err));

        interaction.reply({content: `${user.username}에서 ${data} 로 이름을 바꾸었습니다!` , ephemeral: true})
	},

};
