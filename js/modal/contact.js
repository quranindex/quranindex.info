QI.fixes.recaptchaHtmlElementExists=setInterval(function(){$("#recaptcha_widget").length&&("undefined"!=typeof grecaptcha?grecaptcha.render("recaptcha_widget",{sitekey:"6LeFexwTAAAAAMoShUgcF-9JH3Cjd3hU_V29-AAx"}):QI.helpers.getScript("https://www.google.com/recaptcha/api.js?hl="+QI.globals.lang,null),$("#sendmsg, #sendverse").on("submit",function(e){e.preventDefault();var n=$(this).attr("id");$.ajax({type:$("#"+n).attr("method"),url:QI.globals.base_url+"contactus",data:$("#"+n).serialize(),success:function(e){if(JSON.parse(e).success){$(".well-confirm").removeClass("error");var a="sendmsg"===n?i18n.t("modal.thankyou"):i18n.t("modal.emailsent");$("#"+n).hide(),$(".well-confirm").html('<div><span class="glyphicon glyphicon-thumbs-up"></span>'+a+"</div>").fadeIn(2e3)}else{$(".well-confirm").hide(),$(".well-confirm").fadeIn(1e3),$(".well-confirm").addClass("error");var t=i18n.t("modal.captcha.error");$(".well-confirm").html('<span class="glyphicon glyphicon-warning-sign"></span>'+t).fadeIn(2e3)}}})}),clearInterval(QI.fixes.recaptchaHtmlElementExists))},300),QI.functions.social.sendtoFriendbyForm=function(){$("#modal-window").find("h3").html('<span class="glyphicon glyphicon-pencil"></span> '+i18n.t("modal.title.sharewebsite")),$("#sendverse input[name=sharewebsite]").val(1),"ar"!=i18n.lng()&&"ar"!==QI.globals.lang||$("#sendverse input[name=sharewebsite_ar]").val(1);var e=i18n.t("share.subj"),a=i18n.t("share.content");$("#sendverse").find("input[name='subject']").first().val(e),$("#sendverse").find("textarea").first().val(a)},QI.functions.social.sendSurahbyForm=function(e){var a=e.replace("btn-form-","btn-email-"),t=($("#"+a).attr("data-email-souratname"),$("#"+e).clone());$(t).children().last().text("\n\n"+$(t).children().last().text());var n=t.text().trim();n=n.replace(/\d+/gi," $& ");$("#"+a).attr("data-email-ayanb");$("#sendverse").find("input[name='subject']").first().val(document.title),$("#sendverse").find("textarea").first().val(n)},QI.functions.social.sendVersebyForm=function(e){var a=$("#"+e).attr("data-email-souratname"),t=$("#"+e).attr("data-email-ayafrom")||"",n=e.split("-"),l="",s="en";if(""!=$("#"+e).text()){var r="";$("#"+e).attr("data-timing")&&(r="\n\n"+$("#"+e).data("content").split("<div ")[1].match(/\>.*\</g)[0].replace(/\<|\>/g,"")),l=$("#"+e).text()+r}else{var i=$("#aya-"+n[2]).parent().clone();$(i).children().last().text("\n\n"+$(i).children().last().text()),l=i.text(),"ar"!=QI.globals.resultData.lang.langCode&&"fr"!=QI.globals.resultData.lang.langCode||(s=QI.globals.resultData.lang.langCode)}l=l.trim().replace(/\d+/gi," $& ");$("#"+e).attr("data-email-ayanb");$("#sendverse").find("input[name='subject']").val(i18n.t("navbar.sortbysourat",{lng:s}).replace("اﻟ","")+" "+a+" "+t),$("#sendverse").find("textarea").first().val(l)};