import * as Blockly from "blockly";
import { Order, javascriptGenerator } from "blockly/javascript";
import { createRestrictions } from "../functions/restrictions";

Blockly.Blocks['contextMenu_create'] = {
    init: function () {
        this.appendValueInput('name')
            .setCheck('String').appendField('Add context menu with name:');
        this.appendDummyInput('dummy')
            .appendField('set type to')
            .appendField(new Blockly.FieldDropdown([
                ['message', 'Discord.ApplicationCommandType.Message'],
                ['user', 'Discord.ApplicationCommandType.User'],
            ]), 'type');
        this.appendValueInput('dms')
            .setCheck('Boolean').appendField('usable in DMs:');
        this.setInputsInline(false);
        this.setColour('#5675A1');
        this.setPreviousStatement(true, ["slashCreate", "contextMenuCreate"]);
        this.setNextStatement(true, ["slashCreate", "contextMenuCreate"]);
    }
};

javascriptGenerator.forBlock['contextMenu_create'] = function (block, generator) {
    var val_name = generator.valueToCode(block, 'name', Order.ATOMIC);
    var val_dms = generator.valueToCode(block, 'dms', Order.ATOMIC);
    var field_type = block.getFieldValue('type');
    var code = `\n{
  name: ${val_name},
  type: ${field_type},
  dmPermission: ${val_dms || true}
},`;
    return code;
};

Blockly.Blocks["contextMenu_received"] = {
    init: function () {
        this.appendDummyInput().appendField("When a context menu is clicked");
        this.appendStatementInput("event").setCheck("default");
        this.setInputsInline(false);
        this.setColour("#5675A1");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

javascriptGenerator.forBlock["contextMenu_received"] = function (block, generator) {
    var code_statement = generator.statementToCode(block, "event");

    var code = `client.on("interactionCreate", async (interaction) => {
  if (!interaction.isContextMenuCommand()) return;
${code_statement}});\n`;
    return code;
};

Blockly.Blocks["contextMenu_name"] = {
    init: function () {
        this.appendDummyInput().appendField("name of the context menu");
        this.setColour("#5675A1");
        this.setOutput(true, 'String');
    },
};

javascriptGenerator.forBlock["contextMenu_name"] = () => ['interaction.commandName', Order.NONE];

Blockly.Blocks["contextMenu_userMenu"] = {
    init: function () {
        this.appendDummyInput().appendField("is the menu an user menu?");
        this.setColour("#5675A1");
        this.setOutput(true, 'Boolean');
    },
};

javascriptGenerator.forBlock["contextMenu_userMenu"] = () => ['interaction.isUserContextMenuCommand()', Order.NONE];

Blockly.Blocks["contextMenu_messageMenu"] = {
    init: function () {
        this.appendDummyInput().appendField("is the menu a message menu?");
        this.setColour("#5675A1");
        this.setOutput(true, 'Boolean');
    },
};

javascriptGenerator.forBlock["contextMenu_messageMenu"] = () => ['interaction.isMessageContextMenuCommand()', Order.NONE];

Blockly.Blocks["contextMenu_member"] = {
    init: function () {
        this.appendDummyInput().appendField("member who clicked the menu");
        this.setColour("#5675A1");
        this.setOutput(true, 'member');
    },
};

javascriptGenerator.forBlock["contextMenu_member"] = () => ['interaction.member', Order.NONE];

Blockly.Blocks["contextMenu_user"] = {
    init: function () {
        this.appendDummyInput().appendField("user who clicked the menu");
        this.setColour("#5675A1");
        this.setOutput(true, 'user');
    },
};

javascriptGenerator.forBlock["contextMenu_user"] = () => ['interaction.user', Order.NONE];

Blockly.Blocks["contextMenu_channel"] = {
    init: function () {
        this.appendDummyInput().appendField("channel the menu was clicked in");
        this.setColour("#5675A1");
        this.setOutput(true, 'channel');
    },
};

javascriptGenerator.forBlock["contextMenu_channel"] = () => ['interaction.channel', Order.NONE];

Blockly.Blocks["contextMenu_server"] = {
    init: function () {
        this.appendDummyInput().appendField("server the menu was clicked in");
        this.setColour("#5675A1");
        this.setOutput(true, 'server');
    },
};

javascriptGenerator.forBlock["contextMenu_server"] = () => ['interaction.guild', Order.NONE];