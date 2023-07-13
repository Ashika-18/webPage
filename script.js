const loading = document.querySelector('#loading');

window.addEventListener('load', () => {
    //ローディング中(グレースクリーン)
    loadingAreaGrey.animate();

});

//準備完了
console.log('-STANDBY-')