
"use client";

import { useLanguage } from "@/context/app-provider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { translations } from "@/lib/translations";

type FaqKey = keyof typeof translations.en;

const faqItems: { q: FaqKey, a: FaqKey }[] = [
    { q: 'q_delivery', a: 'a_delivery' },
    { q: 'q_onlineOrder', a: 'a_onlineOrder' },
    { q: 'q_freshProduce', a: 'a_freshProduce' },
    { q: 'q_earlyVeggies', a: 'a_earlyVeggies' },
    { q: 'q_crowd', a: 'a_crowd' },
    { q: 'q_prices', a: 'a_prices' },
    { q: 'q_quality', a: 'a_quality' },
    { q: 'q_chocolates', a: 'a_chocolates' },
    { q: 'q_fruits', a: 'a_fruits' },
    { q: 'q_leafyVeggies', a: 'a_leafyVeggies' },
];

export function Faq() {
    const { t } = useLanguage();

    return (
        <section id="faq-section" className="bg-muted/30 py-12 sm:py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
                        {t('faqTitle')}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t('faqSubtitle')}
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                                    {t(item.q)}
                                </AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {t(item.a)}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
