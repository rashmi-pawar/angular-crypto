import { Component, OnInit, AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
// import * as particlesJS from 'particles.js'

declare var particlesJS: any;
declare const TradingView: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('tradingview') tradingview?: ElementRef;
  @ViewChild('tradingviewETHUSD') tradingviewETHUSD?: ElementRef;
  @ViewChild('tradingviewLTCUSDT') tradingviewLTCUSDT?: ElementRef;
  @ViewChild('tradingviewXRPUSDT') tradingviewXRPUSDT?: ElementRef;
  @ViewChild('tradingviewXBTUSD') tradingviewXBTUSD?: ElementRef;
  @ViewChild('tradingviewDOTUSD') tradingviewDOTUSD?: ElementRef;
  @ViewChild('tradingviewDOGEUSD') tradingviewDOGEUSD?: ElementRef;
  @ViewChild('tradingviewXRPUSDTTT') tradingviewXRPUSDTTT?: ElementRef;

  constructor(private _renderer2: Renderer2) {
    particlesJS.load('particles-js', 'assets/partical.json', null);
  }
  ngAfterViewInit() {
  }
  ngOnInit(): void {
    // new TradingView.widget({
    //   'container_id': 'tradingview_bac65',
    //   "symbol": "BITSTAMP:BTCUSD",
    //   "width": "100%",
    //   "colorTheme": "dark",
    //   "isTransparent": true,
    //   "locale": "in"
    // });

    setTimeout(() => {
      let script = this._renderer2.createElement('script');
      script.type = `text/javascript`;
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
      script.text = `
    {
      "symbol": "BITSTAMP:BTCUSD",
      "width": "100%",
      "colorTheme": "dark",
      "isTransparent": true,
      "locale": "in"
    }`;
      this.tradingview?.nativeElement.appendChild(script);
    }, 1000)

    setTimeout(() => {
      let script = this._renderer2.createElement('script');
      script.type = `text/javascript`;
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
      script.text = `
    {
      "symbol": "BINANCE:LTCUSDT",
      "width": "100%",
      "colorTheme": "dark",
      "isTransparent": true,
      "locale": "in"
    }`;
      this.tradingviewETHUSD?.nativeElement.appendChild(script);
    }, 1000)


    setTimeout(() => {
      let script = this._renderer2.createElement('script');
      script.type = `text/javascript`;
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
      script.text = `
    {
      "symbol": "BINANCE:XRPUSDT",
      "width": "100%",
      "colorTheme": "dark",
      "isTransparent": true,
      "locale": "in"
    }`;
      this.tradingviewLTCUSDT?.nativeElement.appendChild(script);
    }, 1000)
    setTimeout(() => {
      let script = this._renderer2.createElement('script');
      script.type = `text/javascript`;
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
      script.text = `
    {
      "symbol": "BITMEX:XBTUSD",
      "width": "100%",
      "colorTheme": "dark",
      "isTransparent": true,
      "locale": "in"
    }`;
      this.tradingviewXRPUSDT?.nativeElement.appendChild(script);
    }, 1000)


    setTimeout(() => {
      let script = this._renderer2.createElement('script');
      script.type = `text/javascript`;
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
      script.text = `
    {
      "symbol": "KRAKEN:DOTUSD",
      "width": "100%",
      "colorTheme": "dark",
      "isTransparent": true,
      "locale": "in"
    }`;
      this.tradingviewXBTUSD?.nativeElement.appendChild(script);
    }, 1000)
    setTimeout(() => {
      let script = this._renderer2.createElement('script');
      script.type = `text/javascript`;
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
      script.text = `
    {
      "symbol": "BITTREX:DOGEUSD",
      "width": "100%",
      "colorTheme": "dark",
      "isTransparent": true,
      "locale": "in"
    }`;
      this.tradingviewDOTUSD?.nativeElement.appendChild(script);
    }, 1000)
    setTimeout(() => {
      let script = this._renderer2.createElement('script');
      script.type = `text/javascript`;
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
      script.text = `
    {
      "symbol": "BITFINEX:XRPUSD",
      "width": "100%",
      "colorTheme": "dark",
      "isTransparent": true,
      "locale": "in"
    }`;
      this.tradingviewDOGEUSD?.nativeElement.appendChild(script);
    }, 1000)
    setTimeout(() => {
      let script = this._renderer2.createElement('script');
      script.type = `text/javascript`;
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
      script.text = `
    {
      "symbol": "BITSTAMP:BTCUSD",
      "width": "100%",
      "colorTheme": "dark",
      "isTransparent": true,
      "locale": "in"
    }`;
      this.tradingviewXRPUSDTTT?.nativeElement.appendChild(script);
    }, 1000)
  }

}