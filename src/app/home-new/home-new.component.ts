import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { tsParticles } from "tsparticles";

@Component({
  selector: 'app-home-new',
  templateUrl: './home-new.component.html',
  styleUrls: ['./home-new.component.scss']
})
export class HomeNewComponent implements OnInit {
  @ViewChild('tradingview') tradingview?: ElementRef;
  @ViewChild('tradingBuyCrypto') tradingBuyCrypto?: ElementRef;
  @ViewChild('tradingBuyCrypto1') tradingBuyCrypto1?: ElementRef;
  @ViewChild('tradingBuyCrypto2') tradingBuyCrypto2?: ElementRef;
  @ViewChild('tradingSellCrypto') tradingSellCrypto?: ElementRef;
  @ViewChild('tradingsellCrypto1') tradingsellCrypto1?: ElementRef;
  @ViewChild('tradingsellCrypto2') tradingsellCrypto2?: ElementRef;
  @ViewChild('nmarketView') nmarketView?: ElementRef;
  id = "tsparticles";
  constructor(private _renderer2: Renderer2, private router: Router) {
  }
  particlesUrl = "assets/partical.json";
  particlesOptions = {
    background: {
      color: {
        value: "#0d47a1"
      }
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push"
        },
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40
        },
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#ffffff"
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 6,
        straight: false
      },
      number: {
        density: {
          enable: true,
          value_area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        random: true,
        value: 5
      }
    },
    detectRetina: true
  };
  particlesLoaded(container: any): void {
    // console.log(container);
  }

  particlesInit(main: any): void {
    // console.log(main);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }

  ngOnInit(): void {
    this.getNewParticle();
    // $('.selectpicker').selectpicker(); 
    setTimeout(() => {
      let script = this._renderer2.createElement('script');
      script.type = `text/javascript`;
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
      script.text = `
      {
        "width": 1260,
        "height": 470,
        "defaultColumn": "overview",
        "screener_type": "crypto_mkt",
        "displayCurrency": "USD",
        "colorTheme": "light",
        "locale": "in"
      }`;
      this.nmarketView?.nativeElement.appendChild(script);
    }, 1000)


    setTimeout(() => {
      let script = this._renderer2.createElement('script');
      script.type = `text/javascript`;
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
      script.text = `
      {
        "symbol": "BINANCE:XRPUSDT",
        "width": "100%",
        "height": "100%",
        "locale": "in",
        "dateRange": "12M",
        "colorTheme": "light",
        "trendLineColor": "rgba(246, 178, 107, 1)",
        "underLineColor": "rgba(255, 242, 204, 1)",
        "isTransparent": true,
        "autosize": true,
        "largeChartUrl": ""
      }`;
      this.tradingsellCrypto2?.nativeElement.appendChild(script);
    }, 1000)
    setTimeout(() => {
      let script = this._renderer2.createElement('script');
      script.type = `text/javascript`;
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
      script.text = `
      {
        "symbol": "BITSTAMP:ETHUSD",
        "width": "100%",
        "height": "100%",
        "locale": "in",
        "dateRange": "12M",
        "colorTheme": "light",
        "trendLineColor": "rgba(246, 178, 107, 1)",
        "underLineColor": "rgba(255, 242, 204, 1)",
        "isTransparent": true,
        "autosize": true,
        "largeChartUrl": ""
      }`;
      this.tradingsellCrypto1?.nativeElement.appendChild(script);
    }, 1000)
    setTimeout(() => {
      let script = this._renderer2.createElement('script');
      script.type = `text/javascript`;
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
      script.text = `
      {
        "symbol": "BITSTAMP:BTCUSD",
        "width": "100%",
        "height": "100%",
        "locale": "in",
        "dateRange": "12M",
        "colorTheme": "light",
        "trendLineColor": "rgba(246, 178, 107, 1)",
        "underLineColor": "rgba(255, 242, 204, 1)",
        "isTransparent": true,
        "autosize": true,
        "largeChartUrl": ""
      }`;
      this.tradingSellCrypto?.nativeElement.appendChild(script);
    }, 1000)

    setTimeout(() => {
      let script = this._renderer2.createElement('script');
      script.type = `text/javascript`;
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
      script.text = `
      {
        "symbol": "BINANCE:XRPUSDT",
        "width": "100%",
        "height": "100%",
        "locale": "in",
        "dateRange": "12M",
        "colorTheme": "light",
        "trendLineColor": "rgba(246, 178, 107, 1)",
        "underLineColor": "rgba(255, 242, 204, 1)",
        "isTransparent": true,
        "autosize": true,
        "largeChartUrl": ""
      }`;
      this.tradingBuyCrypto2?.nativeElement.appendChild(script);
    }, 1000)

    setTimeout(() => {
      let script = this._renderer2.createElement('script');
      script.type = `text/javascript`;
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
      script.text = `
      {
        "symbol": "BITSTAMP:ETHUSD",
        "width": "100%",
        "height": "100%",
        "locale": "in",
        "dateRange": "12M",
        "colorTheme": "light",
        "trendLineColor": "rgba(246, 178, 107, 1)",
        "underLineColor": "rgba(255, 242, 204, 1)",
        "isTransparent": true,
        "autosize": true,
        "largeChartUrl": ""
      }`;
      this.tradingBuyCrypto1?.nativeElement.appendChild(script);
    }, 1000)

    setTimeout(() => {
      let script = this._renderer2.createElement('script');
      script.type = `text/javascript`;
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
      script.text = `
      {
        "symbol": "BITSTAMP:BTCUSD",
        "width": "100%",
        "height": "100%",
        "locale": "in",
        "dateRange": "12M",
        "colorTheme": "light",
        "trendLineColor": "rgba(246, 178, 107, 1)",
        "underLineColor": "rgba(255, 242, 204, 1)",
        "isTransparent": true,
        "autosize": true,
        "largeChartUrl": ""
      }`;
      this.tradingBuyCrypto?.nativeElement.appendChild(script);
    }, 1000)
    setTimeout(() => {
      let script = this._renderer2.createElement('script');
      script.type = `text/javascript`;
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.text = `
      {
        "symbols": [
        {
          "proName": "BITSTAMP:BTCUSD",
          "title": "BTC/USD"
        },
        {
          "proName": "BITSTAMP:ETHUSD",
          "title": "ETH/USD"
        },
        {
          "description": "BTC/USD",
          "proName": "BITBAY:BTCUSD"
        },
        {
          "description": "XRP/USD",
          "proName": "BITSTAMP:XRPUSD"
        },
        {
          "description": "LTC/USD",
          "proName": "BINANCE:LTCUSDT"
        }
        ],
        "showSymbolLogo": true,
        "colorTheme": "light",
        "isTransparent": true,
        "displayMode": "adaptive",
        "locale": "in"
      }`;
      this.tradingview?.nativeElement.appendChild(script);
    }, 1000)
  }
  goLink(item: any) {
    this.router.navigate([item]).then(() => {
      window.location.reload();
    });
  }
  getNewParticle() {
    tsParticles.load("tsparticles", {
      backgroundMask: {
        cover: {
          color: {
            value: "#fff"
          },
          opacity: 1
        },
        "enable": true
      },
      background: {
        image:
          "linear-gradient(180deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)",
        size: "100% 100%",
        repeat: "no-repeat"
      },
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      particles: {
        color: {
          value: "#000000",
          animation: {
            enable: true,
            speed: 30
          }
        },
        move: {
          direction: "bottom",
          enable: true,
          outModes: {
            default: "out"
          },
          size: true,
          speed: {
            min: 1,
            max: 3
          }
        },
        number: {
          value: 500,
          density: {
            enable: true,
            area: 800
          }
        },
        opacity: {
          value: 1,
          animation: {
            enable: false,
            startValue: "max",
            destroy: "min",
            speed: 0.3,
            sync: true
          }
        },
        rotate: {
          value: {
            min: 0,
            max: 360
          },
          direction: "random",
          // move: true,
          animation: {
            enable: true,
            speed: 60
          }
        },
        tilt: {
          direction: "random",
          enable: true,
          // move: true,
          value: {
            min: 0,
            max: 360
          },
          animation: {
            enable: true,
            speed: 60
          }
        },
        shape: {
          type: ["triangle", "circle", "square"]
        },
        size: {
          value: {
            min: 3,
            max: 5
          }
        },
        roll: {
          darken: {
            enable: true,
            value: 30
          },
          enlighten: {
            enable: true,
            value: 30
          },
          enable: true,
          speed: {
            min: 15,
            max: 25
          }
        },
        wobble: {
          distance: 30,
          enable: true,
          // move: true,
          speed: {
            min: -15,
            max: 15
          }
        }
      }
    });
  }
}
