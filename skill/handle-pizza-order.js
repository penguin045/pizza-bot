'use strict';

module.exports = class HandlePizzaOrder {

    // コンストラクター。このスキルで必要とする、または指定することができるパラメータを設定します。
    constructor() {
        this.required_parameter = {
            pizza: {
                message_to_confirm: {
                    type: "template",
                    altText: "ご注文のピザはお決まりでしょうか？ マルゲリータ、マリナーラからお選びください。",
                    template: {
                        type: "buttons",
                        text: "ご注文のピザはお決まりでしょうか？",
                        actions: [
                            {type:"postback",label:"マルゲリータ",data:"マルゲリータ"},
                            {type:"postback",label:"クアトロフォルマッジ",data:"クアトロフォルマッジ"},
                            {type:"postback",label:"マリナーラ",data:"マリナーラ"}
                        ]
                    }
                }
            },
            size: {
                message_to_confirm: {
                    type: "template",
                    altText: "サイズはいかがいたしましょうか？ S、M、Lからお選びください。",
                    template: {
                        type: "buttons",
                        text: "サイズはいかがいたしましょうか？",
                        actions: [
                            {type:"postback",label:"S",data:"S"},
                            {type:"postback",label:"M",data:"M"},
                            {type:"postback",label:"L",data:"L"}
                        ]
                    }
                }
            },
            address: {
                message_to_confirm: {
                    type: "text",
                    text: "お届け先の住所を教えていただけますか？"
                }
            },
            name: {
                message_to_confirm: {
                    type: "text",
                    text: "最後に、お客様のお名前を教えていただけますか？"
                }
            }
        };

        // このスキルの最終処理が完了したら文脈情報をクリアします。
        this.clear_context_on_finish = true;
    }

    // パラメーターが全部揃ったら実行する処理を記述します。
    finish(bot, bot_event, context){
        let messages = [bot.create_text_message(`${context.confirmed.name} 様、ご注文ありがとうございました！${context.confirmed.pizza}の${context.confirmed.size}サイズを30分以内にご指定の${context.confirmed.address}までお届けに上がります。`)];
        return bot.reply(bot_event, messages);
    }
}