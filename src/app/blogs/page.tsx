"use client";

import { useLanguage } from "@/context/app-provider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { translations } from "@/lib/translations";

type BlogPost = {
  id: string;
  titleKey: keyof typeof translations.en;
  dateKey: keyof typeof translations.en;
  contentKey: keyof typeof translations.en;
};

const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    titleKey: "blog1Title",
    dateKey: "blog1Date",
    contentKey: "blog1Content",
  },
  {
    id: "blog-2",
    titleKey: "blog2Title",
    dateKey: "blog2Date",
    contentKey: "blog2Content",
  },
  {
    id: "blog-3",
    titleKey: "blog3Title",
    dateKey: "blog3Date",
    contentKey: "blog3Content",
  },
];


export default function BlogsPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          {t('blogs')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('blogSubtitle')}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">{t(post.titleKey)}</CardTitle>
              <CardDescription>{t(post.dateKey)}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{t(post.contentKey)}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
