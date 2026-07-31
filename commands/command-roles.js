const {
    SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require('discord.js');

const roles = require('../roles.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roles')
        .setDescription('Posts the self-role buttons'),

    async execute(interaction) {
        const buttons = [];
    }
};

for (const role of roles) {
    buttons.push(

        new ButtonBuilder()
            .setCustomId(role.buttonId)
            .setLabel(role.label)
            .setEmoji(role.emoji)
            .setStyle(ButtonStyle.Secondary)
    );
}

const row = new ActionRowBuilder()
    .addComponents(buttons);

await interaction.reply({

    content: "Choose your roles:",

    components: [row]

});