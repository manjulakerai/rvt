import React from 'react';
import { Video, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
const featuredMedia = [{
  title: "Breaking Down Cultural Barriers: A Personal Journey",
  type: "Video Keynote",
  description: "A powerful narrative exploring identity, systemic racism, and intergenerational trauma through the lens of an Aboriginal woman's experience. The speech addresses crucial themes of cultural belonging, unconscious bias, and the path toward meaningful societal change through personal connection and understanding.",
  youtubeEmbed: "https://www.youtube.com/embed/cEtyttLkq6k?si=jsjDPNqFtVXIAHS0",
  icon: <Video className="h-8 w-8 text-primary" />
}, {
  title: "Youth Advisory Committee Addresses EMRIP",
  type: "Featured Event",
  description: "A groundbreaking moment as our Youth Advisory Committee, led by Renee Thomson, presents to EMRIP on critical issues facing Aboriginal and Torres Strait Islander women in leadership positions, marking a significant step forward in advocating for indigenous women's empowerment.",
  image: "/lovable-uploads/575697fd-9399-408b-b1aa-3a04e21a39fd.png",
  link: "https://www.facebook.com/share/v/1XTCdu57yP/?mibextid=rS40aB7S9Ucbxw6v",
  icon: <MessageSquare className="h-8 w-8 text-primary" />
}, {
  title: "A Cuppa and Yarn with Renee Thomson",
  type: "Interview",
  description: "A young leader from a strong Wiradjuri family, Renee Thomson shares her experiences representing at the United Nations' Expert Mechanism on the Rights of Indigenous Peoples in Geneva. As part of NSW Aboriginal Land Councils' Youth Advisory Committee, she discusses her journey and the establishment of her new Indigenous Youth Leadership Network.",
  youtubeEmbed: "https://www.youtube.com/embed/HQEmi8gOKNA",
  icon: <Video className="h-8 w-8 text-primary" />
}, {
  title: "Renee & TJ - The importance of raising respectful young people",
  type: "Interview",
  description: "Part of the 'Unmute yourself – Speaking up to end violence against women' series. Wiradjuri woman Renee Thompson chats to nephew TJ about finding the courage to speak up about respect. This video is part of the Stop it at the Start campaign, which encourages adults to positively influence young people aged 10-17 years by role modelling positive behaviour, calling out disrespect and starting conversations about respect.",
  youtubeEmbed: "https://www.youtube.com/embed/l58pk1NaJtk?si=dHQSl6qWnpR9zNNf",
  icon: <Video className="h-8 w-8 text-primary" />,
  additionalInfo: {
    campaign: "Stop it at the Start",
    campaignResources: "respect.gov.au",
    supportHotline: "1800RESPECT on 1800 737 732",
    supportWebsite: "1800RESPECT.org.au"
  }
}, {
  title: "COVID-19 Information for Aboriginal Communities",
  type: "Health Information Video",
  description: "Video series dedicated to provide information about COVID-19 to the Aboriginal community of Western Sydney Local Health District. Renee Thomson, Partnerships Officer at Kimberwalli Aboriginal Affairs NSW, interviews Professor Ramon Shaban, Clinical Chair of Infection Control, discussing critical insights into Aboriginal health and community partnerships.",
  youtubeEmbed: "https://www.youtube.com/embed/69ksPD528bk?si=6nJRkiSgY3TtpxZ_",
  icon: <Video className="h-8 w-8 text-primary" />,
  additionalInfo: {
    disclaimer: "This video was filmed on the 7th of May 2020. For updated information please visit www.health.nsw.gov.au/",
    date: "May 26, 2020"
  }
}];
const FeaturedMedia = () => {
  return <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Featured Appearances</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {featuredMedia.map((item, index) => <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-video bg-gray-100 relative">
                {item.youtubeEmbed ? <iframe className="w-full h-full" src={item.youtubeEmbed} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /> : item.image ? <img src={item.image} alt={item.title} className="w-full h-full object-cover" /> : <div className="absolute inset-0 flex items-center justify-center">
                    {item.icon}
                    <span className="ml-2">
                      [PLACEHOLDER: Add actual image/video thumbnail]
                    </span>
                  </div>}
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lime-800">
                  {item.title}
                </CardTitle>
                <CardDescription>{item.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{item.description}</p>
                
                {/* Render additionalInfo if it exists */}
                {item.additionalInfo && 'campaign' in item.additionalInfo && <Alert className="mb-4 bg-muted/50">
                    <AlertDescription>
                      <p className="font-medium">Campaign: {item.additionalInfo.campaign}</p>
                      <p>Resources: {item.additionalInfo.campaignResources}</p>
                      <p>Support: {item.additionalInfo.supportHotline}</p>
                      <p>Website: {item.additionalInfo.supportWebsite}</p>
                    </AlertDescription>
                  </Alert>}
                
                {item.additionalInfo && 'disclaimer' in item.additionalInfo && <Alert className="mb-4 bg-muted/50">
                    <AlertDescription>
                      <p><small className="text-gray-500">{item.additionalInfo.disclaimer}</small></p>
                      <p><small className="text-gray-500">Date: {item.additionalInfo.date}</small></p>
                    </AlertDescription>
                  </Alert>}
                
                {!item.youtubeEmbed && item.link && <a href={item.link} className="text-primary hover:underline flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                    Watch now <ExternalLink className="h-4 w-4" />
                  </a>}
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default FeaturedMedia;