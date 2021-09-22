module.exports = {	
	name: 'Conch in magic', // 파일이름을 적어주세요.
	execute(message) {        
	const  Discord = require("discord.js"); //안쓸떄는 지워도 되요 근데 오류나면 지우세요.
    if (message.content.startsWith('소라고동','소라고동님','마법에 소라고동')) { 
        var ask = ["안돼", "물론", "넌 왜그러니 나한데", "안되요", "그건좀..", "stop!", "다시 해봐", "나도 몰라", "하면 윤지원", "그래", "돼", "돌아가"];
        var askuNum = Math.floor(Math.random()*12);
        var result = ask[askuNum];
        console.log("정상적으로 답변을 보냄(소라고동 명렁어 부분)")
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#DEB887')
        .setTitle('마법에 소라고동')
        .setDescription(result)
        .setThumbnail('https://playwares.com/files/attach/images/763163/304/480/046/69402fc54ae65745f471afa35c9880af.png')
        .setTimestamp()
        .setFooter('Ubuntu 20.04 LTS', 'https://avatars1.githubusercontent.com/u/41885157?s=40&u=285801175efe4af1c2e21b821160fdcaf996b898&v=4');
        message.channel.send(exampleEmbed);     
       }
  
	},
};
