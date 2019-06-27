<template>
    <div>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<div class="container-app">
            <div class="container">
                <center>
                    <div class="custom-app">
                        <img src="@/assets/img/app-unduh.png">
                        <p>
                            Unduh dan pasang aplikasi Autofood di handphone anda sekarang juga.<br>Tersedia pada iOS dan Android.
                        </p>
                        <button class="btn btn-lg btn-footer"><span class="fab fa-globe"></span>IOS App store</button>
                        <button class="btn btn-lg btn-footer"><span class="fab fa-google"></span>Google Play</button>
                    </div>
                </center>
            </div>
        </div>
        <footer>
            <div class="container container-footer">
                <div class="row">
                    <div class="col-md-2">
                        <img src="@/assets/img/Logo.png">
                    </div>
                    <div class="col-md-2">
                        <div style="padding-left: 20px;">
                            <h4>Umum</h4>
                            <p>Home</p>
                            <p>Tentang</p>
                            <p>Layanan</p>
                            <p>Download</p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <h4>Layanan</h4>
                        <p>Pemesanan</p>
                        <p>Pembayaran</p>
                        <p>Pengiriman</p>
                    </div>
                    <div class="col-md-2">
                        <h4>Bantuan</h4>
                        <p>Ketentuan Layanan</p>
                        <p>Privasi</p>
                        <p>Contact</p>
                        <p>FAQ</p>
                    </div>
                    <div class="col-md-4">
                        <h4>Langganan</h4>
                        <form>
                            <input type="email" name="" placeholder="Email anda">
                            <button class="btn btn-lg btn-about">Berlangganan</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
	export default {
		name: 'unduh'
	}
</script>
