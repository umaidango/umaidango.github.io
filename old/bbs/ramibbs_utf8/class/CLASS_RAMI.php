<?php
//////////////////////////////////////////////////////////////////
// RAMI_BBS クラス
// BBSクラスの拡張。
// 独自処理を追加する際はこのクラスでどうぞ。
//////////////////////////////////////////////////////////////////
class RAMI_BBS extends BBS {
    //////////////////////////////////////////////////////////////
    // このメソッドはあっても無くてもいいけど、
    // オーバーライドのサンプルということで、
    // ここでヘッダ出力をしてみる
    //////////////////////////////////////////////////////////////
    // 引数   : 無し
    // 戻り値 : 無し
    //////////////////////////////////////////////////////////////
    public function start() {
        header("Content-Type: text/html; charset=".CHARA_CODE);
        parent::start();
        return;
    }
}
?>