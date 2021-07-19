import QuoteItem from "./QuoteItem";

const QuoteFullList = ({ list }) => {
  return list.map((item) => {
    return (
      <QuoteItem
        key={item.id}
        id={item.id}
        nameQ={item.nameQ}
        surnameQ={item.surnameQ}
        webpageQ={item.webpageQ}
        langNumQ={item.langNumQ}
        pageNumQ={item.pageNumQ}
        seoQ={item.seoQ}
        adsQ={item.adsQ}
        totalQ={item.totalQ}
      />
    );
  });
};

export default QuoteFullList;
