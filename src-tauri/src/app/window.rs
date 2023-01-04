use crate::{conf, utils};
use tauri::{utils::config::WindowUrl, window::WindowBuilder};

pub fn tray_window(handle: &tauri::AppHandle) {
    let chat_conf = conf::ChatConfJson::get_chat_conf();
    let theme = conf::ChatConfJson::theme();
    let app = handle.clone();

    tauri::async_runtime::spawn(async move {
        WindowBuilder::new(&app, "tray", WindowUrl::App(chat_conf.origin.into()))
            .title("ChatGPT")
            .resizable(false)
            .fullscreen(false)
            .inner_size(360.0, 540.0)
            .decorations(false)
            .always_on_top(true)
            .theme(theme)
            .initialization_script(&utils::user_script())
            .initialization_script(include_str!("../assets/core.js"))
            .initialization_script(include_str!("../assets/cmd.js"))
            .user_agent(&chat_conf.ua_tray)
            .build()
            .unwrap()
            .hide()
            .unwrap();
    });
}

pub fn control_window(handle: &tauri::AppHandle) {
    let app = handle.clone();
    tauri::async_runtime::spawn(async move {
        WindowBuilder::new(&app, "main", WindowUrl::App("index.html".into()))
            .title("Control Center")
            .resizable(true)
            .fullscreen(false)
            .inner_size(800.0, 600.0)
            .min_inner_size(800.0, 600.0)
            .build()
            .unwrap();
    });
}
