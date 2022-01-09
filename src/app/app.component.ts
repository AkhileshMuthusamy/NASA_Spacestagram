import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'shopify-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Spacestagram';


  data = [
    {
    "copyright": "Cory Poole",
    "date": "2021-12-20",
    "explanation": "This picture was supposed to feature a comet. Specifically, a series of images of the brightest comet of 2021 were being captured: Comet Leonard.  But the universe had other plans. Within a fraction of a second, a meteor so bright it could be called a fireball streaked through just below the comet. And the meteor's flash was even more green than the comet's coma.  The cause of the meteor's green was likely magnesium evaporating from the meteor's pebble-sized core, while the cause of the comet's green was likely diatomic carbon recently ejected from the comet's city-sized nucleus. The images were taken 10 days ago over the Sacramento River and Mt. Lassen in California, USA. The fireball was on the leading edge of this year's Geminid Meteor Shower -- which peaked a few days later. Comet Leonard is now fading after reaching naked-eye visibility last week -- but now is moving into southern skies.   Almost Hyperspace: Random APOD Generator",
    "hdurl": "https://apod.nasa.gov/apod/image/2112/LeonardMeteor_Poole_2250.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "The Comet and the Fireball",
    "url": "https://apod.nasa.gov/apod/image/2112/LeonardMeteor_Poole_960.jpg"
    },
    {
    "copyright": "Stefan Seip",
    "date": "2021-12-21",
    "explanation": "Welcome to December's solstice, first day of winter in the north and summer for the southern hemisphere. Astronomical markers of the seasons, solstice and equinox dates are based on the Sun's place in its annual journey along the ecliptic, through planet Earth's sky. At this solstice, the Sun reaches its maximum southern declination of -23.5 degrees today at 15:59 UTC, while its right ascension coordinate on the celestial sphere is 18 hours. That puts the Sun in the constellation Sagittarius in a direction near the center of our Milky Way galaxy. In fact, if you could see today's Solstice Sun against faint background stars and nebulae (that's really hard to do, especially in the daytime ...) your view might look something like this composited panorama. To make it, images of our fair galaxy were taken under dark Namibian night skies, then stitched together in a panoramic view. From a snapshot made on 2015 December 21, the Sun was digitally overlayed as a brilliant star at today's northern winter solstice position, close to the center of the Milky Way.   Discovery + Outreach: Graduate student research position open for APOD",
    "hdurl": "https://apod.nasa.gov/apod/image/2112/WinterSolsticeMW_Seip_2980.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Solstice Sun and Milky Way",
    "url": "https://apod.nasa.gov/apod/image/2112/WinterSolsticeMW_Seip_1079.jpg"
    },
    {
    "copyright": "Jordan Sirokie",
    "date": "2021-12-22",
    "explanation": "Birds don't fly this high.  Airplanes don't go this fast.  The Statue of Liberty weighs less.  No species other than human can even comprehend what is going on, nor could any human just a millennium ago. The launch of a rocket bound for space is an event that inspires awe and challenges description.  Pictured here, a SpaceX Falcon 9 rocket lifted off from Kennedy Space Center, Florida earlier this month carrying the Imaging X-ray Polarimetry Explorer (IXPE).  IXPE is scheduled to observe high-energy objects such as neutron stars, black holes, and the centers of distant galaxies to better determine the physics and geometries that create and control them.  From a standing start, the 300,000+ kilogram rocket ship lifted IXPE up to circle the Earth, where the outside air is too thin to breathe. Rockets bound for space are now launched from somewhere on Earth every few days.    Launch Update: James Webb Space Telescope",
    "hdurl": "https://apod.nasa.gov/apod/image/2112/IxpeLaunch_Sirokie_1875.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Launch of the IXPE Observatory",
    "url": "https://apod.nasa.gov/apod/image/2112/IxpeLaunch_Sirokie_960.jpg"
    },
    {
    "copyright": "Tunc Tezel",
    "date": "2021-12-23",
    "explanation": "Are you still looking for that perfect holiday gift for an astronomer? If your night sky is dark and horizon clear enough, the Solar System may have done your shopping for you. Send them outside after sunset to see three planets and a comet. In this snapshot of the December solstice evening sky from the village of Kirazli, Turkey the brightest celestial beacon is Venus, close to the southwestern horizon at the right. Look left and up to find Saturn shining between clouds. Follow that line farther left and up to bright Jupiter, the Solar System's ruling gas giant. This year's surprise visitor to the inner Solar System, Comet Leonard (C/2021 A1), is near the horizon too. The comet is fainter but forms a nearly equilateral triangle with planets Venus and Saturn in this view. After a dramatic brightening in recent days the comet is just visible to the unaided eye, though a nice pair of binoculars is always a good idea.   Notable Submissions to APOD: Planetary Alignment: 2021 December",
    "hdurl": "https://apod.nasa.gov/apod/image/2112/20211221Tezel.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Three Planets and a Comet",
    "url": "https://apod.nasa.gov/apod/image/2112/20211221Tezel1024c.jpg"
    },
    {
    "copyright": "Michael Sherick",
    "date": "2021-12-24",
    "explanation": "The Crab Nebula is cataloged as M1, the first object on Charles Messier's famous 18th century list of things which are not comets. In fact, the Crab is now known to be a supernova remnant, debris from the death explosion of a massive star, witnessed by astronomers in the year 1054. This sharp, ground-based telescopic view combines broadband color data with narrowband data that tracks emission from ionized sulfur, hydrogen, and oxygen atoms to explore the tangled filaments within the still expanding cloud. One of the most exotic objects known to modern astronomers, the Crab Pulsar, a neutron star spinning 30 times a second, is visible as a bright spot near the nebula's center. Like a cosmic dynamo, this collapsed remnant of the stellar core powers the Crab's emission across the electromagnetic spectrum. Spanning about 12 light-years, the Crab Nebula is a mere 6,500 light-years away in the constellation Taurus.   Launch Update: James Webb Space Telescope",
    "hdurl": "https://apod.nasa.gov/apod/image/2112/Sherick_M1_SHOLRGB_12-5-21a.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "M1: The Crab Nebula",
    "url": "https://apod.nasa.gov/apod/image/2112/Sherick_M1_SHOLRGB_12-5-21a_1024.jpg"
    },
    {
    "copyright": "CARA Project",
    "date": "2021-12-25",
    "explanation": "The tail of a comet streams across this three degree wide telescopic field of view captured under dark Namibian skies on December 21. In outburst only a few days ago and just reaching naked eye visibility Comet Leonard (C/2021 A1) is this year's brightest comet. Binoculars will make the diffuse comet easier to spot though, close to the western horizon after sunset. Details revealed in the sharp image show the comet's coma with a greenish tinge, and follow the interaction of the comet's ion tail with magnetic fields in the solar wind. After passing closest to Earth on December 12 and Venus on December 18, Comet Leonard is heading toward perihelion, its closest approach to the Sun on January 3rd. Appearing in late December's beautiful evening skies Comet Leonard has also become known as 2021's Christmas Comet.   Launch Update: James Webb Space Telescope",
    "hdurl": "https://apod.nasa.gov/apod/image/2112/C2021A1_211221.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "The Tail of a Christmas Comet",
    "url": "https://apod.nasa.gov/apod/image/2112/C2021A1_211221_1024.jpg"
    },
    {
    "date": "2021-12-26",
    "explanation": "There's a big new telescope in space. This one, the James Webb Space Telescope (JWST), not only has a mirror over five times larger than Hubble's in area, but can see better in infrared light. The featured picture shows JWST high above the Earth just after being released by the upper stage of an Ariane V rocket, launched yesterday from French Guiana. Over the next month, JWST will move out near the Sun-Earth L2 point where it will co-orbit the Sun with the Earth. During this time and for the next five months, JWST will unravel its segmented mirror and an array of sophisticated scientific instruments -- and test them. If all goes well, JWST will start examining galaxies across the universe and planets orbiting stars across our Milky Way Galaxy in the summer of 2022.   APOD Gallery: Webb Space Telescope Launch",
    "hdurl": "https://apod.nasa.gov/apod/image/2112/JwstLaunch_Arianespace_1920.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "James Webb Space Telescope over Earth",
    "url": "https://apod.nasa.gov/apod/image/2112/JwstLaunch_Arianespace_1080.jpg"
    },
    {
    "copyright": "Matipon TangmatithamNARIT",
    "date": "2021-12-27",
    "explanation": "Which one of these two streaks is a comet? Although they both have comet-like features, the lower streak is the only real comet. This lower streak shows the coma and tail of Comet Leonard, a city-sized block of rocky ice that is passing through the inner Solar System as it continues its looping orbit around the Sun.  Comet Leonard has recently passed its closest to both the Earth and Venus and will round the Sun next week.  The comet, still visible to the unaided eye, has developed a long and changing tail in recent weeks.  In contrast, the upper streak is the launch plume of the Ariane V rocket that lifted the James Webb Space Telescope (JWST) off the Earth two days ago. The featured single-exposure image was taken from Thailand, and the foreground spire is atop a pagoda in Doi Inthanon National Park. JWST, NASA's largest and most powerful space telescope so far, will orbit the Sun near the Earth-Sun L2 point and is scheduled to start science observations in the summer of 2022.    Gallery: Comet Leonard 2021  Gallery: Webb Space Telescope Launch: 2021 December 25",
    "hdurl": "https://apod.nasa.gov/apod/image/2112/CometJwst_Matipon_2048.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Comet Leonard behind JWST Launch Plume",
    "url": "https://apod.nasa.gov/apod/image/2112/CometJwst_Matipon_1080.jpg"
    },
    {
    "copyright": "Håkan Hammar Vemdalen Ski ResortSkiStar",
    "date": "2021-12-28",
    "explanation": "What's happened to the Sun?  Sometimes it looks like the Sun is being viewed through a giant  lens.  In the featured video, however, there are actually millions of tiny lenses: ice crystals.  Water may freeze in the  atmosphere into small, flat, six-sided, ice crystals.  As these crystals flutter to the ground, much time is spent with their faces flat and parallel to the ground.  An observer may find themselves in the same plane as many of the falling ice crystals near sunrise or sunset.  During this alignment, each crystal can act like a miniature lens, refracting sunlight into our view and creating phenomena like parhelia, the technical term for sundogs.  The featured video was taken in late 2017 on the side of a ski hill at the Vemdalen Ski Resort in central  Sweden. Visible in the center is the most direct image of the Sun, while two bright sundogs glow prominently from both the left and the right.  Also visible is the bright 22 degree halo -- as well as the rarer and much fainter 46 degree halo -- also created by sunlight refracting through atmospheric ice crystals.",
    "media_type": "video",
    "service_version": "v1",
    "title": "Sun Halo over Sweden",
    "url": "https://www.youtube.com/embed/2SnbMTQwDKM?rel=0"
    },
    {
    "date": "2021-12-29",
    "explanation": "What and where are these large ovals? They are rotating storm clouds on Jupiter imaged last month by NASA's Juno spacecraft. In general, higher clouds are lighter in color, and the lightest clouds visible are the relatively small clouds that dot the lower oval. At 50 kilometers across, however, even these light clouds are not small.  They are so high up that they cast shadows on the swirling oval below. The featured image has been processed to enhance color and contrast. Large ovals are usually regions of high pressure that span over 1000 kilometers and can last for years. The largest oval on Jupiter is the Great Red Spot (not pictured), which has lasted for at least hundreds of years. Studying cloud dynamics on Jupiter with Juno images enables a better understanding of dangerous typhoons and hurricanes on Earth.   Follow APOD in English on: Facebook,  Instagram, Podcast, Reddit, or Twitter",
    "hdurl": "https://apod.nasa.gov/apod/image/2112/JupiterStorms_JunoGill_1024.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Giant Storms and High Clouds on Jupiter",
    "url": "https://apod.nasa.gov/apod/image/2112/JupiterStorms_JunoGill_1024.jpg"
    },
    {
    "copyright": "Daniele Gasparri",
    "date": "2021-12-30",
    "explanation": "Comet Leonard, brightest comet of 2021, is at the lower left of these two panels captured on December 29 in dark Atacama desert skies. Heading for its perihelion on January 3 Comet Leonard's visible tail has grown. Stacked exposures with a wide angle lens (also displayed in a reversed B/W scheme for contrast), trace the complicated ion tail for an amazing 60 degrees, with bright Jupiter shining near the horizon at lower right. Material vaporizing from Comet Leonard's nucleus, a mass of dust, rock, and ices about 1 kilometer across, has produced the long tail of ionized gas fluorescing in the sunlight. Likely flares on the comet's nucleus and buffeting by magnetic fields and the solar wind in recent weeks have resulted in the tail's irregular pinched and twisted appearance. Still days from its closest approach to the Sun, Comet Leonard's activity should continue. The comet is south of the Solar System's ecliptic plane as it sweeps through the southern constellation Microscopium.",
    "hdurl": "https://apod.nasa.gov/apod/image/2112/tail_gasparri_web.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "The Further Tail of Comet Leonard",
    "url": "https://apod.nasa.gov/apod/image/2112/tail_gasparri_web1024.jpg"
    },
    {
    "copyright": "Malcolm Park",
    "date": "2021-12-31",
    "explanation": "This timelapse gif tracks the James Webb Space Telescope as it streaks across the stars of Orion on its journey to a destination beyond the Moon. Recorded on December 28, 12 consecutive exposures each 10 minutes long were aligned and combined with a subsequent color image of the background stars to create the animation. About 2.5 days after its December 25 launch, JWST cruised past the altitude of the Moon's orbit as it climbed up the gravity ridge from Earth to reach a halo orbit around L2, an Earth-Sun Lagrange point. Lagrange points are convenient locations in space where the combined gravitational attraction of one massive body (Earth) orbiting another massive body (Sun) is in balance with the centripetal force needed to move along with them. So much smaller masses, like spacecraft, will tend to stay there. One of 5 Lagrange points, L2 is about 1.5 million kilometers from Earth directly along the Earth-Sun line. JWST will arrive at L2 on January 23, 29 days after launch. While relaxing in Earth's surface gravity you can follow the James Webb Space Telescope's progress and complicated deployment online.",
    "hdurl": "https://apod.nasa.gov/apod/image/2112/JWST.gif",
    "media_type": "image",
    "service_version": "v1",
    "title": "JWST on the Road to L2",
    "url": "https://apod.nasa.gov/apod/image/2112/JWSTcrop1024.gif"
    },
    {
    "copyright": "Soumyadeep Mukherjee",
    "date": "2022-01-01",
    "explanation": "very Full Moon of 2021 shines in this year-spanning astrophoto project, a composite portrait of the familiar lunar nearside at each brightest lunar phase. Arranged by moonth, the year progresses in stripes beginning at the top. Taken with the same camera and lens the stripes are from Full Moon images all combined at the same pixel scale. The stripes still look mismatched, but they show that the Full Moon's angular size changes throughout the year depending on its distance from Kolkata, India, planet Earth. The calendar month, a full moon name, distance in kilometers, and angular size is indicated for each stripe. Angular size is given in minutes of arc corresponding to 1/60th of a degree. The largest Full Moon is near a perigee or closest approach in May. The smallest is near an apogee, the most distant Full Moon in December. Of course the full moons of May and November also slid into Earth's shadow during 2021's two lunar eclipses.",
    "hdurl": "https://apod.nasa.gov/apod/image/2201/MoonstripsAnnotatedIG.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "The Full Moon of 2021",
    "url": "https://apod.nasa.gov/apod/image/2201/MoonstripsAnnotatedIG_crop1024.jpg"
    },
    {
    "copyright": "Dani Caxete",
    "date": "2022-01-02",
    "explanation": "Sometimes falling ice crystals make the atmosphere into a giant lens causing arcs and halos to appear around the Sun or Moon. One Saturday night in 2012 was just such a time near Madrid, Spain, where a winter sky displayed not only a bright Moon but four rare lunar halos.  The brightest object, near the top of the featured image, is the Moon. Light from the Moon refracts through tumbling hexagonal ice crystals into a somewhat rare 22-degree halo seen surrounding the Moon. Elongating the 22-degree arc horizontally is a more rare circumscribed halo caused by column ice crystals. Even more rare, some moonlight refracts through more distant tumbling ice crystals to form a (third) rainbow-like arc 46 degrees from the Moon and appearing here just above a picturesque winter landscape. Furthermore, part of a whole 46-degree circular halo is also visible, so that an extremely rare -- especially for the Moon --  quadruple halo  was captured. Far in the background is a famous winter skyscape that includes Sirius, the belt of Orion, and Betelgeuse -- visible between the inner and outer arcs. Halos and arcs typically last for minutes to hours, so if you do see one there should be time to invite family, friends or neighbors to share your unusual lensed vista of the sky.",
    "hdurl": "https://apod.nasa.gov/apod/image/2201/lunararcs_caxete_1280.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Quadruple Lunar Halo Over Winter Road",
    "url": "https://apod.nasa.gov/apod/image/2201/lunararcs_caxete_960.jpg"
    },
    {
    "copyright": "Jan Hattenbach",
    "date": "2022-01-03",
    "explanation": "You couldn't see Comet Leonard’s extremely long tail with a telescope — it was just too long. You also couldn't see it with binoculars — still too long. Or with your eyes -- it was too dim. Or from a city — the sky was too bright. But from a dark location with a low horizon — your camera could. And still might -- if the comet survives today's closest encounter with the Sun, which occurs between the orbits of Mercury and Venus. The featured picture was created from two deep and wide-angle camera images taken from La Palma in the Canary Islands of Spain late last month.  Afterwards, if it survives, what is left of Comet Leonard's nucleus will head out of our Solar System, never to return.",
    "hdurl": "https://apod.nasa.gov/apod/image/2201/LeonardTail_Hattenbach_1600.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Comet Leonard's Long Tail",
    "url": "https://apod.nasa.gov/apod/image/2201/LeonardTail_Hattenbach_960.jpg"
    },
    {
    "date": "2022-01-04",
    "explanation": "What's happened to that moon of Saturn? Nothing -- Saturn's moon Rhea is just partly hidden behind Saturn's rings. In 2010, the robotic Cassini spacecraft then orbiting Saturn took this narrow-angle view looking across the Solar System's most famous rings. Rings visible in the foreground include the thin F ring on the outside and the much wider A and B rings just interior to it. Although it seems to be hovering over the rings, Saturn's moon Janus is actually far behind them.  Janus is one of Saturn's smaller moons and measures only about 180 kilometers across. Farther out from the camera is the heavily cratered Rhea, a much larger moon measuring 1,500 kilometers across. The top of Rhea is visible only through gaps in the rings. After more than a decade of exploration and discovery, the Cassini spacecraft ran low on fuel in 2017 and was directed to enter Saturn's atmosphere, where it surely melted.   Explore Your Universe: Random APOD Generator",
    "hdurl": "https://apod.nasa.gov/apod/image/2201/RheaJanus_Cassini_1020.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Moons Beyond Rings at Saturn",
    "url": "https://apod.nasa.gov/apod/image/2201/RheaJanus_Cassini_1020.jpg"
    },
    {
    "copyright": "Luca Vanzella",
    "date": "2022-01-05",
    "explanation": "Does the Sun always rise in the same direction?  No.  As the months change, the direction toward the rising Sun changes, too.  The featured image shows the direction of sunrise every month during 2021 as seen from the city of Edmonton, Alberta, Canada. The camera in the image is always facing due east, with north toward the left and south toward the right.  As shown in an accompanying video, the top image was taken in 2020 December, while the bottom image was captured in 2021 December, making 13 images in total. Although the Sun always rises in the east in general, it rises furthest to the south of east near the December solstice, and furthest north of east near the June solstice. In many countries, the December Solstice is considered an official change in season: for example the first day of winter in the North.  Solar heating and stored energy in the Earth's surface and atmosphere are near their lowest during winter, making the winter season the coldest of the year.    Status Updates: Deploying the James Webb Space Telescope",
    "hdurl": "https://apod.nasa.gov/apod/image/2201/SunriseYear_Vanzella_2400.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "A Year of Sunrises",
    "url": "https://apod.nasa.gov/apod/image/2201/SunriseYear_Vanzella_960.jpg"
    },
    {
    "copyright": "Tamas Ladanyi",
    "date": "2022-01-06",
    "explanation": "That's not a young crescent Moon posing behind cathedral towers after sunset. It's Venus in a crescent phase. About 40 million kilometers away and about 2 percent illuminated by sunlight, it was captured with camera and telephoto lens in this series of exposures as it set in western skies on January 1 from Veszprem, Hungary. The bright celestial beacon was languishing in the evening twilight, its days as the Evening Star coming to a close as 2022 began. But it was also growing larger in apparent size and becoming an ever thinner crescent in telescopic views. Heading toward a (non-judgemental) inferior conjunction, the inner planet will be positioned between Earth and Sun on January 9 and generally lost from view in the solar glare. A crescent Venus will soon reappear though. Rising in the east by mid-month just before the Sun as the brilliant Morning Star.   Status Updates: Deploying the James Webb Space Telescope",
    "hdurl": "https://apod.nasa.gov/apod/image/2201/venus_220101_ladanyi_web.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "The Last Days of Venus as the Evening Star",
    "url": "https://apod.nasa.gov/apod/image/2201/venus_220101_ladanyi_web1024.jpg"
    },
    {
    "copyright": "Point Blue Conservation Science",
    "date": "2022-01-07",
    "explanation": "A male Adelie penguin performed this Ecstatic Vocalization in silhouette during the December 4 solar eclipse, the final eclipse of 2021. Of course his Ecstatic Vocalization is a special display that male penguins use to claim their territory and advertise their condition. This penguin's territory, at Cape Crozier Antarctica, is located in one of the largest Adelie penguin colonies. The colony has been studied by researchers for over 25 years. From there, last December's eclipse was about 80 percent total when seen at its maximum phase as the Moon's shadow crossed planet Earth's southernmost continent.   Status Updates: Deploying the James Webb Space Telescope",
    "hdurl": "https://apod.nasa.gov/apod/image/2201/eclipse_EV.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Ecstatic Solar Eclipse",
    "url": "https://apod.nasa.gov/apod/image/2201/eclipse_EV1024.jpg"
    }
    ];

  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
}
