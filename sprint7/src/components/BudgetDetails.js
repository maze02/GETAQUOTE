import { useState } from "react";
const BudgetDetails = () => {
  const [total, setTotal] = useState(55);

  const handlechange = () => {
    console.log("I clicked the checkbox");
  };

  return (
    <div>
      <form>
        <input type="checkbox" id="webPage" name="webPage" value="500" />
        <label htmlFor="webPage"> A webpage (500 €)</label>
        <br></br>
        <br></br>
        <input type="checkbox" id="Seo" name="seo" value="300" />
        <label htmlFor="Seo"> SEO consultation (300 €)</label>
        <br></br>
        <br></br>
        <input
          type="checkbox"
          id="googleAdsCampaign"
          name="googleAdsCampaign"
          value="200"
        />
        <label htmlFor="googleAdsCampaign"> Google Ads Campaign (200 €)</label>
        <br></br>
      </form>

      <p>testing sum total = {total}</p>
    </div>
  );
};

export default BudgetDetails;
