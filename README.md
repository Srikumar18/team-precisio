---

# Cost Report Explorer

This project converts an **Excel-based cost report** into structured JSON (`costData.json`) and provides a **React frontend** to navigate the Bill of Materials (BOM) by domain (e.g., Frame & Body, Brake System, Steering System, etc.). Each component includes cost breakdowns and a placeholder image.

---

## 🚀 Features

* Extracts **all domains** (Frame & Body, Brake System, Wheels, Suspension, etc.) from Excel.
* Each domain contains:

  * Components with cost breakdowns
  * A dummy image link for now (`https://dummyimage.com/...`)
  * A total cost calculation
* `BOM` sheet is **ignored** (only subsystems matter).
* React frontend supports:

  * Navigation between domains
  * Viewing component details and costs
  * Displaying images per domain/component

---

## ⚙️ Setup

```bash
npm install
npm run dev
```

The app runs on [http://localhost:8080](http://localhost:8080).

---

## 📊 Data Format

Each domain in `costData.json` looks like this:

```json
{
  "name": "BRAKES SYSTEM",
  "total": 5226,
  "overviewImage": "https://dummyimage.com/1200x600/ccc/000&text=brakes_system",
  "components": [
    {
      "partNumber": "BS101",
      "name": "Brake Pedal",
      "manufacturedOrBought": "Bought",
      "processUsed": "",
      "processCost": null,
      "rawMaterialCost": null,
      "fastenersCost": null,
      "toolingCost": null,
      "unitCost": 100.0,
      "quantity": 1,
      "totalCost": 100.0,
      "image": "https://dummyimage.com/600x400/000/fff&text=brake_pedal"
    }
  ]
}
```

---

## 🖼️ Images

* Each **domain** has an `overviewImage`.
* Each **component** has its own `image`.
* Currently they are **dummy placeholders** generated via [dummyimage.com](https://dummyimage.com).
* To use real diagrams:

  * Place images inside `public/src/assets/domain_name/component_name`
  * Update the `"image"` field in `costData.json` to point to your actual file paths.

---

## ✅ Next Steps

* Replace dummy images with real images extracted from Excel or designed diagrams.
