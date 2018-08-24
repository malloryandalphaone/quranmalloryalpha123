        function commandIs(str, msg){
            return msg.content.toLowerCase().startsWith('p!' + str);
        }

        function pluck(array) {
            return array.map(function(item) { return item['name']; });
        }

        function hasRole(mem, role) {
            if(pluck(mem.roles).includes(role)){
                return true;
            } else {
                return false;
            }

          }





        var servers = {};






        var q1 = "p!quran 1"

        var q2 = "p!quran 2"

        var q3 = "p!quran 3"

        var q4 = "p!quran 4"





        function play(connection, message) {
            var server = servers[message.guild.id];

            server.dispatcher = connection.playStream(yt(server.queue[0], { fliter: "audionly" }));

            server.queue.shift();

            server.dispatcher.on("end", function() {
                if (server.queue[0]) play(connection, message);
                else connection.disconnect();
            });
        }



        //sowar


        Rocket.on("message", message => {

                                if (message.content === q1 ) {
                          message.react('🔊')
            const voiceChannel = message.member.voiceChannel;
            if (!voiceChannel) {
              return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
            }
            voiceChannel.join()
              .then(connnection => {
                let stream = yt('https://www.youtube.com/watch?v=V4b9f9BQTKI', {audioonly: true});
                const dispatcher = connnection.playStream(stream);
              });
          }

                                  if (message.content === q2 ) {
                          message.react('🔊')
            const voiceChannel = message.member.voiceChannel;
            if (!voiceChannel) {
              return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
            }
            voiceChannel.join()
              .then(connnection => {
                let stream = yt('https://youtu.be/0m02xNtR8gA', {audioonly: true});
                const dispatcher = connnection.playStream(stream);
              });
          }

                                    if (message.content === q3 ) {
                          message.react('🔊')
            const voiceChannel = message.member.voiceChannel;
            if (!voiceChannel) {
              return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
            }
            voiceChannel.join()
              .then(connnection => {
                let stream = yt('https://www.youtube.com/watch?v=4JvY-MccxNk', {audioonly: true});
                const dispatcher = connnection.playStream(stream);
              });
          }

                                      if (message.content === q4 ) {
                          message.react('🔊')
            const voiceChannel = message.member.voiceChannel;
            if (!voiceChannel) {
              return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
            }
            voiceChannel.join()
              .then(connnection => {
                let stream = yt('https://www.youtube.com/watch?v=Ktync4j_nmA', {audioonly: true});
                const dispatcher = connnection.playStream(stream);
                });
          }



            //outher_cummon


          if(message.content === "p!qstop" ) {
                          var servers = {};

                    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();

          }



        });
