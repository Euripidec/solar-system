import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ExplorePageComponent } from './pages/explore-page/explore-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SunPageComponent } from './pages/explore-page/planets-page/sun-page/sun-page.component';
import { MercuryPageComponent } from './pages/explore-page/planets-page/mercury-page/mercury-page.component';
import { VenusPageComponent } from './pages/explore-page/planets-page/venus-page/venus-page.component';
import { EarthPageComponent } from './pages/explore-page/planets-page/earth-page/earth-page.component';
import { MarsPageComponent } from './pages/explore-page/planets-page/mars-page/mars-page.component';
import { JupiterPageComponent } from './pages/explore-page/planets-page/jupiter-page/jupiter-page.component';
import { SaturnPageComponent } from './pages/explore-page/planets-page/saturn-page/saturn-page.component';
import { UranusPageComponent } from './pages/explore-page/planets-page/uranus-page/uranus-page.component';
import { NeptunePageComponent } from './pages/explore-page/planets-page/neptune-page/neptune-page.component';
import { PlutoPageComponent } from './pages/explore-page/planets-page/pluto-page/pluto-page.component';
import { MoonPageComponent } from './pages/explore-page/planets-page/moon-page/moon-page.component';
import { SunGalleryComponent } from './pages/gallery-page/sun-gallery/sun-gallery.component';
import { MercuryGalleryComponent } from './pages/gallery-page/mercury-gallery/mercury-gallery.component';
import { VenusGalleryComponent } from './pages/gallery-page/venus-gallery/venus-gallery.component';
import { EarthGalleryComponent } from './pages/gallery-page/earth-gallery/earth-gallery.component';
import { MarsGalleryComponent } from './pages/gallery-page/mars-gallery/mars-gallery.component';
import { JupiterGalleryComponent } from './pages/gallery-page/jupiter-gallery/jupiter-gallery.component';
import { SaturnGalleryComponent } from './pages/gallery-page/saturn-gallery/saturn-gallery.component';
import { UranusGalleryComponent } from './pages/gallery-page/uranus-gallery/uranus-gallery.component';
import { NeptuneGalleryComponent } from './pages/gallery-page/neptune-gallery/neptune-gallery.component';
import { PlutoGalleryComponent } from './pages/gallery-page/pluto-gallery/pluto-gallery.component';
import { MoonGalleryComponent } from './pages/gallery-page/moon-gallery/moon-gallery.component';


export const routes: Routes = [
    {path: '',
        component: HomePageComponent},

    {path: 'explore',
        component: ExplorePageComponent},
            
    {path: 'gallery',
        component: GalleryPageComponent},
        
    {path: 'about',
        component: AboutPageComponent},

    {path: 'sun',
        component: SunPageComponent
    },

    {path: 'mercury',
        component: MercuryPageComponent
    },

    {path: 'venus',
        component:VenusPageComponent
    },

    {path: 'earth',
        component:EarthPageComponent
    },

    {path: 'mars',
        component:MarsPageComponent
    },

    {path: 'jupiter',
        component:JupiterPageComponent
    },

    {path: 'saturn',
        component:SaturnPageComponent
    },

    {path: 'uranus',
        component:UranusPageComponent
    },

    {path: 'neptune',
        component:NeptunePageComponent
    },

    {path: 'pluto',
        component:PlutoPageComponent
    },

    {path: 'moon',
        component:MoonPageComponent
    },

    {path: 'sun-gallery',
        component:SunGalleryComponent
    },

    {path: 'mercury-gallery',
        component:MercuryGalleryComponent
    },

    {path: 'venus-gallery',
        component:VenusGalleryComponent
    },

    {path: 'earth-gallery',
        component:EarthGalleryComponent
    },

    {path: 'mars-gallery',
        component:MarsGalleryComponent
    },

    {path: 'jupiter-gallery',
        component:JupiterGalleryComponent
    },

    {path: 'saturn-gallery',
        component:SaturnGalleryComponent
    },

    {path: 'uranus-gallery',
        component:UranusGalleryComponent
    },

    {path: 'neptune-gallery',
        component:NeptuneGalleryComponent
    },

    {path: 'pluto-gallery',
        component:PlutoGalleryComponent
    },

    {path: 'moon-gallery',
        component:MoonGalleryComponent
    }




    ];
