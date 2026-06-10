// 画面が完全に読み込まれてから実行する
document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('menuTrigger');
    const menu = document.getElementById('pulldownMenu');
    const mask = document.getElementById('overlayMask');
    const closeBtn = document.getElementById('menuCloseBtn');

    // ボタンやメニューが存在するときだけ動かす（エラー防止）
    if (trigger && menu && mask) {
        // メニューを開閉する関数
        function toggleMenu() {
            menu.classList.toggle('active');
            mask.classList.toggle('active');
        }

        // メニューを閉じる関数
        function closeMenu() {
            menu.classList.remove('active');
            mask.classList.remove('active');
        }

        // 各種クリックイベントの登録
        trigger.addEventListener('click', toggleMenu);
        mask.addEventListener('click', closeMenu);
        
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                closeMenu();
            });
        }
    }
});