import axios from "axios";
import React, { useEffect, useState } from "react";
import { DepthChart } from "../components/DepthChart.jsx";
import { HeikenAshi, HLCChart, OHLCChart } from "../components/HLC.jsx";
import {
  AreaSpline,
  CandleSticks,
  CandlesticksvHeikin,
  StockCharts,
} from "../components/OHLCCharts";
import Loader from "../components/Loader.jsx";

function CandleStick() {
  const [OHLC, setOHLC] = useState([]);
  const [market, setMarket] = useState([]);
  const [HLC, setHLC] = useState([]);
  const [heikin, setHeikin] = useState([]);
  const [ethMarket, setEthMarket] = useState([]);
  const [splineData, setSplineData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCandleStickData = () => {
    // setLoading(true);
    axios
      .all([
        axios.get(
          `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&startTime=${Date.now() - 60*60*1000 }&endTime=${Date.now()}`
        ),
        // axios.get(
        //   `https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=365`
        // ),
        // axios.get(
        //   `https://api.coingecko.com/api/v3/coins/ethereum/ohlc?vs_currency=usd&days=14`
        // ),
        // axios.get(
        //   `https://api.coingecko.com/api/v3/coins/ethereum/ohlc?vs_currency=usd&days=365`
        // ),
        // axios.get(
        //   `https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=365`
        // ),
        // axios.get(
        //   `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=720&interval=hourly`
        // ), 
      ])
      .then((res) => {
        // setMarket(res[0].data);
        setOHLC(res[0].data);
        // setHLC(res[2].data);
        // setHeikin(res[1].data);
        // setEthMarket(res[4].data);
        //setSplineData(res[4].data);
        // setLoading(false);
      });
  }

  useEffect(() => {
    getCandleStickData();
    setInterval(() => {
      getCandleStickData();
    }, 10000);
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .all([
        axios.get(
          `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&startTime=${Date.now() - 60*60*1000 }&endTime=${Date.now()}`
        ),
        // axios.get(
        //   `https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=365`
        // ),
        // axios.get(
        //   `https://api.coingecko.com/api/v3/coins/ethereum/ohlc?vs_currency=usd&days=14`
        // ),
        // axios.get(
        //   `https://api.coingecko.com/api/v3/coins/ethereum/ohlc?vs_currency=usd&days=365`
        // ),
        // axios.get(
        //   `https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=365`
        // ),
        // axios.get(
        //   `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=720&interval=hourly`
        // ), 
      ])
      .then((res) => {
        // setMarket(res[0].data);
        setOHLC(res[0].data);
        // setHLC(res[2].data);
        // setHeikin(res[1].data);
        // setEthMarket(res[4].data);
        //setSplineData(res[4].data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          {/* <AreaSpline splineData={splineData} /> */}
          {/* <OHLCChart hlc={HLC} /> */}
          <CandleSticks data={OHLC} />
          {/* <DepthChart /> */}
          {/* <HeikenAshi heikin={heikin} market={ethMarket} /> */}
          {/* <HLCChart ohlc={HLC} /> */}
          {/* <CandlesticksvHeikin ohlc={OHLC} /> */}
          {/* <StockCharts market={market} ohlc={OHLC} /> */}
        </>
      )}
    </div>
  );
}

export default CandleStick;
