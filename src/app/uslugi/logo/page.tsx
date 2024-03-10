import Image from 'next/image';
import React from 'react';
import SectionTitle from '@/components/section-header';
import Contact from '@/app/components/contact';
import ScrollDownBtn from '@/ui/scroll-down-btn';
import ServicesNav from '../components/services-nav';

const Logo = () => {
  return (
    <div>
      <section
        className={`relative flex lg:py-10 justify-center items-center w-[100%] bg-black bg-opacity-40 min-h-[91vh] mb-10  text-white p-1 xl:p-0`}>
        <div>
          <Image
            src='/background.jpg'
            alt='backgorund'
            sizes='100vw'
            fill
            priority
            className='hidden sm:inline object-cover z-[-3] '
          />
          <Image
            src='/background-mobile.jpg'
            alt='backgorund-mobile'
            sizes='100vw'
            fill
            priority
            className='sm:hidden object-cover z-[-3] '
          />
        </div>
        <ServicesNav>
          {' '}
          <div className='w-[100%] bg-main-color h-[1px]' />
          <div className='sm:mb-5 py-3'>
            <h1 className='text-left text-md lg:text-xl my-2'>
              Projektowanie{' '}
              <span className='text-main-color font-semibold'>Logo</span>{' '}
            </h1>
            <p className='text-sm lg:text-lg text-start sm:text-justify'>
              Twoja firma może się wyróżnić na rynku nie tylko dzięki doskonałym
              produktom, ale także poprzez unikatowe logo. Jego projekt składa
              się z trzech kluczowych elementów: sygnetu, logotypu i claimu,
              które mogą być stosowane razem lub oddzielnie, w zależności od
              potrzeb. Zapewniamy kompleksowe podejście do projektowania logo.
            </p>
          </div>
        </ServicesNav>

        <ScrollDownBtn />
      </section>
      <section className='relative container mx-auto pb-5 ' id='second-section'>
        <div className='w-[100%] md:w-[50%] sm:px-5 flex flex-col justify-between text-center sm:text-left'>
          <SectionTitle>Przykładowe projekty</SectionTitle>
        </div>
        <div className='relative flex flex-wrap gap-5 justify-center container mx-auto pb-5 sm:pb-20'>
          <div className='relative w-[20%] h-auto '>
            <Image
              src='/example-logo1.jpg'
              alt='logo warsztatu'
              width={300}
              height={279}
              priority
              className='w-[100%] h-[100%]'
            />
          </div>
          <div className='relative w-[20%] h-auto'>
            <Image
              src='/example-logo2.jpg'
              alt='logo piekarni'
              width={300}
              height={294}
              priority
              className='w-[100%] h-[100%]'
            />
          </div>
          <div className='relative w-[20%] h-auto '>
            <Image
              src='/example-logo3.jpg'
              alt='logo pizzeri'
              width={300}
              height={281}
              priority
              className='w-[100%] h-[100%]'
            />
          </div>
          <div className='relative w-[20%] h-auto '>
            <Image
              src='/example-logo4.jpg'
              alt='logo pomocy drogowej'
              width={300}
              height={300}
              priority
              className='w-[100%] h-[100%]'
            />
          </div>
          <div className='relative w-[20%] h-auto '>
            <Image
              src='/example-logo5.jpg'
              alt='logo fotografa'
              width={300}
              height={300}
              priority
              className='w-[100%] h-[100%]'
            />
          </div>
          <div className='relative w-[20%] h-auto '>
            <Image
              src='/example-logo6.jpg'
              alt='logo warsztatu'
              width={300}
              height={300}
              priority
              className='w-[100%] h-[100%]'
            />
          </div>
          <div className='relative w-[20%] h-auto '>
            <Image
              src='/example-logo7.jpg'
              alt='logo pomocy drogowej'
              width={300}
              height={295}
              priority
              className='w-[100%] h-[100%]'
            />
          </div>
          <div className='relative w-[20%] h-auto '>
            <Image
              src='/example-logo9.png'
              alt='logo schroniska'
              width={300}
              height={300}
              priority
              className='w-[100%] h-[100%]'
            />
          </div>
        </div>
      </section>
      <section className='relative container mx-auto pb-20 min-h-[65vh]'>
        <div className='w-[100%] md:w-[50%] sm:px-5 flex flex-col justify-between text-center sm:text-left'>
          <SectionTitle>Etapy Realizacji</SectionTitle>
        </div>
        <div className='mx-5 text-md xl:mx-80 xl:text-lg'>
          <div className='mt-10'>
            <h2 className='text-xl sm:text-2xl pb-5'>
              <span className='font-bold'>Rozpoznanie i analiza briefu</span>
            </h2>
            <p className='pb-5 leading-8 text-justify'>
              Pierwszym krokiem jest zrozumienie potrzeb klienta. To obejmuje
              analizę briefu, który zawiera informacje o firmie, jej celach,
              grupie docelowej, konkurencji, preferowanych kolorach, stylach i
              wszelkich innych specyficznych wymaganiach.
            </p>
          </div>
          <div className='mt-5'>
            <h2 className='text-xl sm:text-2xl pb-5'>
              <span className='font-bold'>Badania</span>
            </h2>
            <p className='pb-5 leading-8 text-justify'>
              Następnie przeprowadzamy badania rynkowe, które obejmują analizę
              konkurencji, trendów branżowych i preferencji grupy docelowej.
              Celem jest uzyskanie głębszego zrozumienia sektora, w którym
              działa klient, oraz uniknięcie przypadkowego naśladowania innych
              znanych marek.
            </p>
          </div>
          <div className='mt-5'>
            <h2 className='text-xl sm:text-2xl pb-5'>
              <span className='font-bold'>Tworzenie koncepcji</span>
            </h2>
            <p className='pb-5 leading-8 text-justify'>
              Na tym etapie projektant tworzy różnorodne koncepcje graficzne.
              Pomysły te są generowane na podstawie zebranych informacji i
              twórczej interpretacji briefu. Często używa się szkiców ręcznych,
              aby szybko eksplorować różne pomysły.
            </p>
          </div>
          <div className='mt-5'>
            <h2 className='text-xl sm:text-2xl pb-5'>
              <span className='font-bold'>Projektowanie cyfrowe</span>
            </h2>
            <p className='pb-5 leading-8 text-justify'>
              Wybrane koncepcje są następnie rozwijane cyfrowo. Używa się
              specjalistycznego oprogramowania do grafiki, aby stworzyć bardziej
              szczegółowe i wyrafinowane wersje logo.
            </p>
          </div>
          <div className='mt-5'>
            <h2 className='text-xl sm:text-2xl pb-5'>
              <span className='font-bold'>Prezentacja klientowi</span>
            </h2>
            <p className='pb-5 leading-8 text-justify'>
              Projektowane logo jest prezentowane klientowi, często w kilku
              wariantach. Ważne jest, aby pokazać logo w różnych kontekstach,
              np. na wizytówkach, stronach internetowych, aby klient mógł
              zobaczyć, jak logo będzie wyglądało w praktycznym użyciu.
            </p>
          </div>
          <div className='mt-5'>
            <h2 className='text-xl sm:text-2xl pb-5'>
              <span className='font-bold'>Odbiór opinii i modyfikacje</span>
            </h2>
            <p className='pb-5 leading-8 text-justify'>
              Klient przekazuje swoje opinie na temat prezentowanych projektów.
              Na tej podstawie projektant wprowadza ewentualne modyfikacje,
              dopracowując logo do finalnej formy.
            </p>
          </div>
          <div className='mt-5'>
            <h2 className='text-xl sm:text-2xl pb-5'>
              <span className='font-bold'>
                Finalizacja i dostarczenie plików
              </span>
            </h2>
            <p className='pb-5 leading-8 text-justify'>
              Po zatwierdzeniu finalnego projektu, logo jest przygotowywane do
              użycia w różnych formatach i rozdzielczościach, odpowiednich do
              druku i użycia cyfrowego.
            </p>
          </div>
          <div className='mt-5'>
            <h2 className='text-xl sm:text-2xl pb-5'>
              <span className='font-bold'>Wytyczne dotyczące marki</span>
            </h2>
            <p className='pb-5 leading-8 text-justify'>
              Często dostarcza się także wytyczne dotyczące marki, które
              określają, jak logo powinno być stosowane, w tym informacje o
              kolorystyce, typografii i zastosowaniu.
            </p>
          </div>
        </div>
        <div className='w-[100%] md:w-[50%] mt-10 flex flex-col justify-between text-center sm:text-left'>
          <SectionTitle>Logo w Biznesie: Klucz do Sukcesu</SectionTitle>
        </div>
        <div className='mx-5 text-md xl:mx-80 xl:text-lg'>
          <div className='mt-10'>
            <h2 className='text-xl sm:text-2xl pb-5'>
              Pierwsze Wrażenie Jest Najważniejsze
            </h2>
            <p className='pb-5 leading-8 text-justify'>
              Logo często jest pierwszym punktem kontaktu między firmą a
              potencjalnym klientem. Dobre logo może natychmiast przyciągnąć
              uwagę i zaintrygować, podczas gdy słabo zaprojektowane może
              odstraszyć. W pierwszych sekundach logo może przekazać kluczowe
              wartości firmy, jej profesjonalizm i charakter. W świecie, gdzie
              decyzje konsumenckie są podejmowane błyskawicznie, pierwsze
              wrażenie ma kluczowe znaczenie.
            </p>
          </div>
          <div className='mt-10'>
            <h2 className='text-xl sm:text-2xl pb-5'>
              Tożsamość i Charakter Marki
            </h2>
            <p className='pb-5 leading-8 text-justify'>
              Logo to wizualne odzwierciedlenie tożsamości marki. Przekazuje
              misję, wartości i ogólny charakter firmy. Dzięki dobrze
              zaprojektowanemu logo, marka jest w stanie komunikować swoje
              unikalne cechy i wyróżniać się na rynku. Jest to szczególnie ważne
              w branżach o wysokim stopniu konkurencji.
            </p>
            <p className='pb-5 leading-8 text-justify'>
              Dla małych firm, dobrze zaprojektowane logo ma równie dużą, jeśli
              nie większą, wagę niż dla dużych korporacji. Dobre logo pomaga
              wyróżnić firmę spośród konkurencji i budować rozpoznawalność
              marki. Jest to szczególnie ważne w początkowej fazie rozwoju, gdy
              firma stara się zyskać uznanie i zaufanie klientów. Małe firmy
              często walczą o zaufanie i wiarygodność na rynku zdominowanym
              przez większe, uznane marki. Profesjonalnie zaprojektowane logo
              może znacząco podnieść postrzeganie firmy jako profesjonalnej i
              godnej zaufania.
            </p>
          </div>
          <div className='mt-10'>
            <h2 className='text-xl sm:text-2xl pb-5'>
              Uniwersalność i Adaptowalność
            </h2>
            <p className='pb-5 leading-8 text-justify'>
              W erze cyfrowej, logo musi być funkcjonalne w różnych środowiskach
              – od ekranów telefonów po wielkoformatowe bilbordy. Dobre logo
              jest elastyczne, skalowalne i łatwo adaptowalne do różnych
              formatów, jednocześnie zachowując swoją czytelność i
              rozpoznawalność. Projektowanie logo nie powinno być oparte
              wyłącznie na aktualnych trendach. Dobrze zaprojektowane logo jest
              ponadczasowe i może służyć firmie przez wiele lat, co jest ważne z
              punktu widzenia inwestycji w branding. Projektowanie logo to nie
              tylko kwestia estetyki; to strategiczna inwestycja w markę. W
              dzisiejszym zglobalizowanym świecie, gdzie decyzje konsumenckie są
              często podejmowane w ułamku sekundy.
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Logo;
