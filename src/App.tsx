import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import mapFeatures from "./world_countries.json";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <ResponsiveChoropleth
        data={[
          {
            id: "AFG",
            value: 581718
          },
          {
            id: "AGO",
            value: 954836
          },
          {
            id: "ALB",
            value: 109513
          },
          {
            id: "ARE",
            value: 414230
          },
          {
            id: "ARG",
            value: 788279
          },
          {
            id: "ARM",
            value: 910145
          },
          {
            id: "ATA",
            value: 601629
          },
          {
            id: "ATF",
            value: 851916
          },
          {
            id: "AUT",
            value: 883227
          },
          {
            id: "AZE",
            value: 166592
          },
          {
            id: "BDI",
            value: 547446
          },
          {
            id: "BEL",
            value: 573339
          },
          {
            id: "BEN",
            value: 741132
          },
          {
            id: "BFA",
            value: 54374
          },
          {
            id: "BGD",
            value: 775575
          },
          {
            id: "BGR",
            value: 222127
          },
          {
            id: "BHS",
            value: 868205
          },
          {
            id: "BIH",
            value: 613624
          },
          {
            id: "BLR",
            value: 824018
          },
          {
            id: "BLZ",
            value: 845841
          },
          {
            id: "BOL",
            value: 136583
          },
          {
            id: "BRN",
            value: 653707
          },
          {
            id: "BTN",
            value: 524896
          },
          {
            id: "BWA",
            value: 453449
          },
          {
            id: "CAF",
            value: 953048
          },
          {
            id: "CAN",
            value: 58273
          },
          {
            id: "CHE",
            value: 182134
          },
          {
            id: "CHL",
            value: 762024
          },
          {
            id: "CHN",
            value: 730856
          },
          {
            id: "CIV",
            value: 127547
          },
          {
            id: "CMR",
            value: 529259
          },
          {
            id: "COG",
            value: 705606
          },
          {
            id: "COL",
            value: 800667
          },
          {
            id: "CRI",
            value: 711802
          },
          {
            id: "CUB",
            value: 787552
          },
          {
            id: "-99",
            value: 715956
          },
          {
            id: "CYP",
            value: 334424
          },
          {
            id: "CZE",
            value: 553375
          },
          {
            id: "DEU",
            value: 277871
          },
          {
            id: "DJI",
            value: 727507
          },
          {
            id: "DNK",
            value: 663652
          },
          {
            id: "DOM",
            value: 424835
          },
          {
            id: "DZA",
            value: 752686
          },
          {
            id: "ECU",
            value: 737424
          },
          {
            id: "EGY",
            value: 710139
          },
          {
            id: "ERI",
            value: 312236
          },
          {
            id: "ESP",
            value: 375292
          },
          {
            id: "EST",
            value: 748704
          },
          {
            id: "ETH",
            value: 885939
          },
          {
            id: "FIN",
            value: 513832
          },
          {
            id: "FJI",
            value: 634956
          },
          {
            id: "FLK",
            value: 605315
          },
          {
            id: "FRA",
            value: 534197
          },
          {
            id: "GAB",
            value: 985159
          },
          {
            id: "GBR",
            value: 136156
          },
          {
            id: "GEO",
            value: 361795
          },
          {
            id: "GHA",
            value: 393659
          },
          {
            id: "GIN",
            value: 842417
          },
          {
            id: "GMB",
            value: 390381
          },
          {
            id: "GNB",
            value: 40718
          },
          {
            id: "GNQ",
            value: 483062
          },
          {
            id: "GRC",
            value: 913484
          },
          {
            id: "GTM",
            value: 642017
          },
          {
            id: "GUY",
            value: 475117
          },
          {
            id: "HND",
            value: 582887
          },
          {
            id: "HRV",
            value: 107208
          },
          {
            id: "HTI",
            value: 555251
          },
          {
            id: "HUN",
            value: 554176
          },
          {
            id: "IDN",
            value: 424244
          },
          {
            id: "IND",
            value: 117767
          },
          {
            id: "IRL",
            value: 518429
          },
          {
            id: "IRN",
            value: 124525
          },
          {
            id: "IRQ",
            value: 796374
          },
          {
            id: "ISL",
            value: 168319
          },
          {
            id: "ISR",
            value: 522708
          },
          {
            id: "ITA",
            value: 575901
          },
          {
            id: "JAM",
            value: 499082
          },
          {
            id: "JOR",
            value: 305196
          },
          {
            id: "JPN",
            value: 773395
          },
          {
            id: "KAZ",
            value: 599968
          },
          {
            id: "KEN",
            value: 143106
          },
          {
            id: "KGZ",
            value: 113116
          },
          {
            id: "KHM",
            value: 413449
          },
          {
            id: "OSA",
            value: 269767
          },
          {
            id: "KWT",
            value: 777423
          },
          {
            id: "LAO",
            value: 39901
          },
          {
            id: "LBN",
            value: 740324
          },
          {
            id: "LBR",
            value: 204991
          },
          {
            id: "LBY",
            value: 922943
          },
          {
            id: "LKA",
            value: 327095
          },
          {
            id: "LSO",
            value: 83052
          },
          {
            id: "LTU",
            value: 560973
          },
          {
            id: "LUX",
            value: 735535
          },
          {
            id: "LVA",
            value: 553547
          },
          {
            id: "MAR",
            value: 757900
          },
          {
            id: "MDA",
            value: 759827
          },
          {
            id: "MDG",
            value: 603037
          },
          {
            id: "MEX",
            value: 689384
          },
          {
            id: "MKD",
            value: 734447
          },
          {
            id: "MLI",
            value: 709445
          },
          {
            id: "MMR",
            value: 627920
          },
          {
            id: "MNE",
            value: 85683
          },
          {
            id: "MNG",
            value: 389543
          },
          {
            id: "MOZ",
            value: 210301
          },
          {
            id: "MRT",
            value: 442302
          },
          {
            id: "MWI",
            value: 761071
          },
          {
            id: "MYS",
            value: 134302
          },
          {
            id: "NAM",
            value: 451599
          },
          {
            id: "NCL",
            value: 363203
          },
          {
            id: "NER",
            value: 182331
          },
          {
            id: "NGA",
            value: 19248
          },
          {
            id: "NIC",
            value: 835185
          },
          {
            id: "NLD",
            value: 335589
          },
          {
            id: "NOR",
            value: 480971
          },
          {
            id: "NPL",
            value: 15557
          },
          {
            id: "NZL",
            value: 220974
          },
          {
            id: "OMN",
            value: 453345
          },
          {
            id: "PAK",
            value: 536816
          },
          {
            id: "PAN",
            value: 722001
          },
          {
            id: "PER",
            value: 311789
          },
          {
            id: "PHL",
            value: 759219
          },
          {
            id: "PNG",
            value: 958994
          },
          {
            id: "POL",
            value: 751554
          },
          {
            id: "PRI",
            value: 645355
          },
          {
            id: "PRT",
            value: 811382
          },
          {
            id: "PRY",
            value: 909529
          },
          {
            id: "QAT",
            value: 220975
          },
          {
            id: "ROU",
            value: 452265
          },
          {
            id: "RUS",
            value: 271392
          },
          {
            id: "RWA",
            value: 472220
          },
          {
            id: "ESH",
            value: 764121
          },
          {
            id: "SAU",
            value: 555443
          },
          {
            id: "SDN",
            value: 5234
          },
          {
            id: "SDS",
            value: 823881
          },
          {
            id: "SEN",
            value: 369315
          },
          {
            id: "SLB",
            value: 241459
          },
          {
            id: "SLE",
            value: 859968
          },
          {
            id: "SLV",
            value: 759961
          },
          {
            id: "ABV",
            value: 475622
          },
          {
            id: "SOM",
            value: 284930
          },
          {
            id: "SRB",
            value: 482723
          },
          {
            id: "SUR",
            value: 465599
          },
          {
            id: "SVK",
            value: 453692
          },
          {
            id: "SVN",
            value: 691156
          },
          {
            id: "SWZ",
            value: 986148
          },
          {
            id: "SYR",
            value: 376186
          },
          {
            id: "TCD",
            value: 9218
          },
          {
            id: "TGO",
            value: 959349
          },
          {
            id: "THA",
            value: 273648
          },
          {
            id: "TJK",
            value: 742368
          },
          {
            id: "TKM",
            value: 752216
          },
          {
            id: "TLS",
            value: 415433
          },
          {
            id: "TTO",
            value: 112564
          },
          {
            id: "TUN",
            value: 474409
          },
          {
            id: "TUR",
            value: 505564
          },
          {
            id: "TWN",
            value: 795941
          },
          {
            id: "TZA",
            value: 254080
          },
          {
            id: "UGA",
            value: 502756
          },
          {
            id: "UKR",
            value: 693952
          },
          {
            id: "URY",
            value: 389253
          },
          {
            id: "USA",
            value: 118709
          },
          {
            id: "UZB",
            value: 685107
          },
          {
            id: "VEN",
            value: 359320
          },
          {
            id: "VNM",
            value: 475875
          },
          {
            id: "VUT",
            value: 8767
          },
          {
            id: "PSE",
            value: 194686
          },
          {
            id: "YEM",
            value: 188096
          },
          {
            id: "ZAF",
            value: 600472
          },
          {
            id: "ZMB",
            value: 602240
          },
          {
            id: "ZWE",
            value: 929926
          },
          {
            id: "KOR",
            value: 533998
          }
        ]}
        features={mapFeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        onClick={e => {
          console.log(e);
        }}
      />
    </div>
  );
}

export default App;
