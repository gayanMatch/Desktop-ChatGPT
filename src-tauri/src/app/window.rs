use crate::{conf, utils};
use tauri::{utils::config::WindowUrl, window::WindowBuilder};

pub fn mini_window(handle: &tauri::AppHandle) {
    let chat_conf = conf::ChatConfJson::get_chat_conf();
    let theme = conf::ChatConfJson::theme();

    WindowBuilder::new(handle, "mini", WindowUrl::App(chat_conf.origin.into()))
        .resizable(false)
        .fullscreen(false)
        .inner_size(360.0, 540.0)
        .decorations(false)
        .always_on_top(true)
        .theme(theme)
        .initialization_script(&utils::user_script())
        .initialization_script(include_str!("../assets/html2canvas.js"))
        .initialization_script(include_str!("../assets/jspdf.js"))
        .initialization_script(include_str!("../assets/core.js"))
        .initialization_script(include_str!("../assets/export.js"))
        .user_agent(&chat_conf.ua_phone)
        .build()
        .unwrap()
        .hide()
        .unwrap();
}
