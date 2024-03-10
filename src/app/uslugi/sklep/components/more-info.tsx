'use client';
import React from 'react';
import SectionTitle from '@/components/section-header';
import { motion } from 'framer-motion';

const moreInfoData = [
  {
    title: 'Rozwój twojego sklepu internetowego',
    text: 'Rozwój branży e-commerce otwiera przed przedsiębiorcami nowe możliwości, a my jesteśmy tutaj, aby pomóc Ci wykorzystać je w pełni. Jeśli marzysz o własnym sklepie internetowym, który nie tylko przyciąga klientów, ale również zachęca ich do zakupów, to nasza oferta jest właśnie dla Ciebie.',
  },
  {
    title: 'Dostosowane rozwiązania dla każdego biznesu:',
    text: 'Dobór odpowiedniego rozwiązania do tworzenia małego lub dużego sklepu internetowego jest kluczowym krokiem w procesie e-commerce. Istnieje wiele czynników, które należy wziąć pod uwagę, aby osiągnąć sukces w prowadzeniu sklepu online. Po pierwsze, ważne jest zrozumienie swoich potrzeb i celów biznesowych. Małe sklepy mogą skorzystać z prostszych, gotowych platform e-commerce, takich jak Shopify lub WooCommerce, które oferują wiele gotowych rozwiązań i są stosunkowo łatwe w obsłudze. Dla większych sklepów, które mają bardziej zaawansowane wymagania, rozważenie niestandardowych rozwiązań opartych na systemach takich jak Magento lub PrestaShop może być konieczne. Należy także rozważyć kwestie budżetowe i koszty utrzymania sklepu internetowego. W zależności od wybranej platformy, mogą pojawić się koszty licencji, hostingowe oraz opłaty za dodatkowe funkcje. Dlatego ważne jest oszacowanie, ile można przeznaczyć na rozwijanie i utrzymanie sklepu online.',
  },
  {
    title: 'Tworzenie doświadczenia użytkownika i zwiększanie sprzedaży',
    text: 'Dobór odpowiedniego rozwiązania do tworzenia małego lub dużego sklepu internetowego jest kluczowym krokiem w procesie e-commerce. Istnieje wiele czynników, które należy wziąć pod uwagę, aby osiągnąć sukces w prowadzeniu sklepu online. Po pierwsze, ważne jest zrozumienie swoich potrzeb i celów biznesowych. Małe sklepy mogą skorzystać z prostszych, gotowych platform e-commerce, takich jak Shopify lub WooCommerce, które oferują wiele gotowych rozwiązań i są stosunkowo łatwe w obsłudze. Dla większych sklepów, które mają bardziej zaawansowane wymagania, rozważenie niestandardowych rozwiązań opartych na systemach takich jak Magento lub PrestaShop może być konieczne. Należy także rozważyć kwestie budżetowe i koszty utrzymania sklepu internetowego. W zależności od wybranej platformy, mogą pojawić się koszty licencji, hostingowe oraz opłaty za dodatkowe funkcje. Dlatego ważne jest oszacowanie, ile można przeznaczyć na rozwijanie i utrzymanie sklepu online.',
  },
  {
    title: 'Wsparcie na każdym etapie Twojej drogi w E-commerce',
    text: 'Pamiętaj, że stworzenie sklepu internetowego to dopiero początek Twojej drogi w e-commerce. Chętnie będziemy Cię wspierać na każdym etapie, pomagając przekształcić odwiedzających w lojalnych klientów. Zacznijmy razem tworzyć Twoją przyszłość w świecie cyfrowego handlu!',
  },
];

const MoreInfo = () => {
  return (
    <motion.div
      className='container left-1/2 relative -translate-x-1/2  mb-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ once: true }}>
      <SectionTitle style=' text-center md:text-start my-[50px]'>
        Dowiedz się więcej
      </SectionTitle>
      {moreInfoData.map((info, index) => (
        <div key={index} className='my-4  w-full'>
          <div className='relative left-1/2 -translate-x-1/2 w-full  lg:w-3/4 px-4 lg:px-0 '>
            <p className='mb-2 text-base lg:text-xl font-semibold'>
              {info.title}
            </p>
            <p className='text-sm '>{info.text}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default MoreInfo;
