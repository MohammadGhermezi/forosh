import React, { useEffect, useRef, useState } from "react";
import noUiSlider from "nouislider";
import 'nouislider/dist/nouislider.css';

const PriceRangeSlider = ({ min = 0, max = 1000000, onChange }) => {
  const sliderRef = useRef(null);
  const [range, setRange] = useState([min, max]);

  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    // بررسی اینکه آیا اسلایدر قبلاً ساخته شده یا نه
    if (!slider.noUiSlider) {
      noUiSlider.create(slider, {
        start: [min, max],
        connect: true,
        range: { min, max },
        step: 10000,
        tooltips: false,
        format: {
          to: (value) => Math.round(value),
          from: (value) => parseFloat(value)
        }
      });
    } else {
      slider.noUiSlider.updateOptions({
        start: [min, max],
        range: { min, max },
      });
    }

    // تنظیمات هنگام تغییر مقدار اسلایدر
    slider.noUiSlider.on("update", (values) => {
      const [low, high] = values.map((v) => Math.round(v));
      setRange([low, high]);
      onChange?.([low, high]);
    });

    // پاکسازی هنگام خروج از کامپوننت
    return () => {
      if (slider.noUiSlider) {
        slider.noUiSlider.off("update");
      }
    };
  }, [min, max]);

  return (
    <div className="w-full">
      <div className="flex justify-between mb-3">
        <div className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium">
          {range[0].toLocaleString()} تومان
        </div>

        <div className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium">
          {range[1].toLocaleString()} تومان
        </div>
      </div>

      <div ref={sliderRef} className="my-4"></div>
    </div>
  );
};

export default PriceRangeSlider;
