const products = [
    {
        "name": "MBD-X12SAE-5",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x12sae-5.png.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x12sae-5.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "ATX",
        "Processor": "10th/11th Gen Intel\u00ae Core\u2122 i9/i7/i5/i3 Processors, Intel\u00ae Xeon\u00ae W-1200/W-1300 Processors Single Socket LGA-1200 (Socket H5), Up to 125W TDP",
        "Memory": "128GB Unbuffered ECC/non-ECC UDIMM, DDR4-3200MHz, in 4 DIMM slots",
        "Expansion Slots": "2 PCIe 4.0 x16 (16/NA or 8/8), 2 PCIe 3.0 x1 1 PCI 5V 32bit M.2 Interface: 1 PCIe 4.0 x4 and 2 PCIe 3.0 x4 (RAID 0, 1) M.2 Form Factor: 2280/22110 M.2 Key: M-Key"
    },
    {
        "name": "MBD-H11SSW-IN",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/h/1/h11ssw-in_spec.jpg_1.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/h11ssw-in.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "Proprietary",
        "Processor": "Single AMD EPYC\u2122 7001/7002* series Processor (*Board revision 2.x required) Socket SP3",
        "Memory": "2TB Registered ECC DDR4 2666MHz SDRAM in 16 DIMMs 4TB Registered ECC DDR4 3200MHz SDRAM in 16 DIMMs (Board revision 2.x required)",
        "Expansion Slots": "1 PCI-E 3.0 x32 Left Riser Slot 1 PCI-E 3.0 x16 Right Riser Slot M.2 Interface: 2 PCI-E 3.0 x2 M.2 Form Factor: 2280, 22110 M.2 Key: M-key"
    },
    {
        "name": "X10SDV-TLN4F",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x10sdv-tln4f_connectors.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x10sdv-tln4f.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "Mini-ITX",
        "Processor": "Intel\u00ae Xeon\u00ae processor D-1541, Single socket FCBGA 1667, 8-Core, 45W",
        "Memory": "Up to 128GB ECC RDIMM DDR4 2400MHz or 64GB ECC/non-ECC UDIMM in 4 sockets",
        "Expansion Slots": "1 PCI-E 3.0 x16, M.2 PCI-E 3.0 x4 (SATA support), M Key 2242/2280"
    },
    {
        "name": "X11DPI-N",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11dpi-nt_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11dpi-n.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "E-ATX",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors Dual Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 205W TDP, 2 UPI up to 10.4 GT/s",
        "Memory": "Up to 4TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 4TB 3DS ECC LRDIMM, DDR4-2933MHz Or 2TB Intel\u00a9 PMem, DDR4-2666MHz, in 16 DIMM slots; Up to 2TB Intel\u00ae Optane\u2122 DC Persistent Memory in memory mode (Cascade Lake only)",
        "Expansion Slots": "4 PCIe 3.0 x16, 2 PCIe 3.0 x8, 2 PCIe 3.0 NVMe x4 Internal Port(s) M.2 Interface: PCIe 3.0 x4 M.2 Form Factor: 2260, 2280, 22110 M.2 Key: M-Key"
    },
    {
        "name": "X11DPL-I",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11dpi-nt_top_1.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11dpl-i.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "ATX",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors, Dual Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 140W TDP, 2 UPI up to 10.4 GT/s",
        "Memory": "Up to 2TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 2TB 3DS ECC LRDIMM, DDR4-2933MHz, in 8 DIMM slots",
        "Expansion Slots": "2 PCIe 3.0 x16, 3 PCIe 3.0 x8, 1 PCIe 3.0 x4 (in x8 slot) M.2 Interface: 1 SATA/PCIe 3.0 x4 M.2 Form Factor: 2260, 2280 M.2 Key: M-Key"
    },
    {
        "name": "X11SSW-F",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11ssw-f_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11ssw-f.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "Proprietary",
        "Processor": "Single socket H4 (LGA 1151) supports Intel\u00ae Xeon\u00ae processor E3-1200 v6/v5, Intel\u00ae 7th/6th Gen. Core\u2122 i3 series, Intel\u00ae Celeron\u00ae and Intel\u00ae Pentium\u00ae",
        "Memory": "Up to 64GB Unbuffered ECC UDIMM DDR4 2400MHz; 4 DIMM slots",
        "Expansion Slots": "1 PCIe 3.0 x4 (in x16, Right Riser slot), 1 PCIe 3.0 x16 (Left Riser slot), M.2 Interface: PCIe 3.0 x4; SATA, Form Factor: 22110, 2260, 2280, Key: M-Key"
    },
    {
        "name": "X11SSL-F",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11ssl-f_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11ssl-f.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "Micro-ATX",
        "Processor": "single socket H4 (LGA 1151) supports Intel\u00ae Xeon\u00ae processor E3-1200 v6/v5, Intel\u00ae 7th/6th Gen. Core\u2122 i3 series, Intel\u00ae Celeron\u00ae and Intel\u00ae Pentium\u00ae",
        "Memory": "Up to 64GB Unbuffered ECC UDIMM DDR4 2400MHz; 4 DIMM slots",
        "Expansion Slots": "1 PCIe 3.0 x8 (in x16), 1 PCIe 3.0 x8, 1 PCIe 3.0 x4 (in x8)"
    },
    {
        "name": "X11SSH-F",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11ssh-f_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11ssh-f.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "Micro-ATX",
        "Processor": "Single socket H4 (LGA 1151) supports Intel\u00ae Xeon\u00ae processor E3-1200 v6/v5, Intel\u00ae 7th/6th Gen. Core\u2122 i3 series, Intel\u00ae Celeron\u00ae and Intel\u00ae Pentium\u00ae",
        "Memory": "Up to 64GB Unbuffered ECC UDIMM DDR4 2400MHz; 4 DIMM slots",
        "Expansion Slots": "1 PCIe 3.0 x8 (in x16), 1 PCIe 3.0 x8, 1 PCIe 3.0 x4 (in x8), M.2 Interface: PCIe 3.0 x2, Form Factor: 2280, Key: M-Key"
    },
    {
        "name": "X11SPL-F",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11spl-f_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11spl-f.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "ATX",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors, Single Socket LGA-3647 (Socket P) supported, CPU TDP supports Up to 165W TDP",
        "Memory": "Up to 2TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 2TB 3DS ECC LRDIMM, DDR4-2933MHz, in 8 DIMM slots; Up to 1TB Intel Optane DC Persistent Memory in memory mode (Cascade Lake Only)",
        "Expansion Slots": "2 PCIe 3.0 x8 (in x16 slot), 4 PCIe 3.0 x8, 1 PCIe 3.0 x4 (in x8 slot), M.2 Interface: PCIe 3.0 x4; SATA, Form Factor: 2280, 22110, Key: M-Key"
    },
    {
        "name": "X11SPI-TF",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11spi-tf_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11spi-tf.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "ATX",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors, , Single Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 205W TDP",
        "Memory": "Up to 2TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 2TB 3DS ECC LRDIMM, DDR4-2933MHz, in 8 DIMM slots",
        "Expansion Slots": "1 PCIe 3.0 x16, 1 PCIe 3.0 x16 (x16 or x8 ), 1 PCIe 3.0 x8 (x0 or x8 ), 1 PCIe 3.0 x8, 1 PCIe 3.0 x4 (in x8 slot), M.2 Interface: PCIe 3.0 x4; SATA, Form Factor: 2280, 22110, Key: M-Key"
    },
    {
        "name": "X11SAE",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11sae_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11sae.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "ATX",
        "Processor": "Single socket H4 (LGA 1151) supports Intel\u00ae Xeon\u00ae processor E3-1200 v5/v6, Intel\u00ae 6th/7th Gen. Core\u2122 i7/i5/i3 series, Intel\u00ae Celeron\u00ae and Intel\u00ae Pentium\u00ae",
        "Memory": "Up to 64GB Unbuffered ECC/non-ECC UDIMM DDR4 2400MHz; 4 DIMM slots",
        "Expansion Slots": "2 PCIe 3.0 x16, 3 PCIe 3.0 x1, ***2 PCIe x16 slots are running at x16/NA or x8/x8 *** 2 PCI, M.2 Interface: 1 PCIe 3.0 x4 Form Factor: 2242/2260/2280 Key: M-Key"
    },
    {
        "name": "X11SRM-F",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11srm-f_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11srm-f.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "microATX",
        "Processor": "Intel\u00ae Xeon\u00ae W-2100 Processors, Intel\u00ae Xeon\u00ae W-2200 Processors, Single Socket LGA-2066 (Socket R4) supported, CPU TDP supports Up to 165W TDP",
        "Memory": "Up to 256GB ECC RDIMM, DDR4-2933MHz; Up to 512GB ECC LRDIMM, DDR4-2933MHz, in 4 DIMM slots",
        "Expansion Slots": "1 PCIe 3.0 x16, 2 PCIe 3.0 x8 M.2 Interface: 1 PCIe 3.0 x4 M.2 Form Factor: 2280 M.2 Key: M-Key"
    },
    {
        "name": "X11DAi-N",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11dai-n_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11dai-n.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "E-ATX",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors Dual Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 205W TDP, 2 UPI up to 10.4 GT/s",
        "Memory": "Up to 4TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 4TB 3DS ECC LRDIMM, DDR4-2933MHz, in 16 DIMM slots; Up to 2TB Intel\u00ae Optane\u2122 DC Persistent Memory in memory mode (Cascade Lake only).",
        "Expansion Slots": "4 PCIe 3.0 x16, 2 PCIe 3.0 x8, 2 PCIe 3.0 NVMe x4 Internal Port(s)"
    },
    {
        "name": "X11DDW-L",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11ddw-l_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11ddw-l.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "Proprietary WIO",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors, Dual Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 205W TDP, 2 UPI up to 10.4 GT/s",
        "Memory": "Up to 3TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 3TB 3DS ECC LRDIMM, DDR4-2933MHz, in 12 DIMM slots; Up to 2TB Intel\u00ae Optane\u2122 DC Persistent Memory in memory mode (Cascade Lake only)",
        "Expansion Slots": "1 PCIe 3.0 x32 Left Riser Slot, 1 PCIe 3.0 x16 Right Riser Slot"
    },
    {
        "name": "X11DDW-NT",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11ddw-nt_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11ddw-nt.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "Proprietary WIO",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors, Dual Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 205W TDP, 2 UPI up to 10.4 GT/s",
        "Memory": "Up to 3TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 3TB 3DS ECC LRDIMM, DDR4-2933MHz, in 12 DIMM slots; Up to 2TB Intel\u00ae Optane\u2122 DC Persistent Memory in memory mode (Cascade Lake only).",
        "Expansion Slots": "1 PCIe 3.0 x4, M.2 Interface: PCIe 3.0 x2 and SATA M.2 Form Factor: 2242, 2280 M.2 Key: M-Key"
    },
    {
        "name": "X11DPH-i",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11dph-t_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11dph-i.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "E-ATX",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors, Dual Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 205W TDP, 3 UPI up to 10.4 GT/s",
        "Memory": "Up to 4TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 4TB 3DS ECC LRDIMM, DDR4-2933MHz Or 2TB DCPMM, DDR4-2666MHz, in 16 DIMM slots; Up to 2TB Intel\u00ae Optane\u2122 DC Persistent Memory in memory mode (Cascade Lake only)",
        "Expansion Slots": "3 PCIe 3.0 x16, 4 PCIe 3.0 x8 M.2 Interface: 2 PCIe 3.0 x4 M.2 Form Factor: 2242/2260/2280/22110 M.2 Key: M-Key (RAID 0,1 support)"
    },
    {
        "name": "X11DPH-T",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11dph-t_top_1.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11dph-t.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "E-ATX",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors, Dual Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 205W TDP, 3 UPI up to 10.4 GT/s",
        "Memory": "Up to 4TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 4TB 3DS ECC LRDIMM, DDR4-2933MHz Or 2TB DCPMM, DDR4-2666MHz, in 16 DIMM slots",
        "Expansion Slots": "3 PCIe 3.0 x16, 4 PCIe 3.0 x8 M.2 Interface: 2 PCIe 3.0 x4, RAID 0,1 Form Factor: 2242/2260/2280/22110 Key: M-Key"
    },
    {
        "name": "X11DPH-Tq",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11dph-tq.jpg_1.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11dph-tq.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "E-ATX",
        "Processor": "Dual Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 205W TDP, 3 UPI up to 10.4 GT/s",
        "Memory": "2933MHz Or 2TB DCPMM, DDR4-2666MHz, in 16 DIMM slots; Up to 2TB Intel\u00ae Optane\u2122 DC Persistent Memory in memory mode (Cascade Lake only)",
        "Expansion Slots": "3 PCIe 3.0 x16, 3 PCIe 3.0 x8 M.2 Interface: 2 PCIe 3.0 x4 M.2 Form Factor: 2242/2260/2280/22110 M.2 Key: M-Key (RAID 0,1 support)"
    },
    {
        "name": "X11SAE-F",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11sae-f_top-2.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11sae-f.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "ATX",
        "Processor": "Single socket H4 (LGA 1151) supports  Intel\u00ae Xeon\u00ae processor E3-1200 v5/v6,  Intel\u00ae 6th/7th Gen. Core\u2122 i7/i5/i3 series,  Intel\u00ae Celeron\u00ae and Intel\u00ae Pentium\u00ae",
        "Memory": "Up to 64GB Unbuffered ECC/non-ECC UDIMM DDR4 2400MHz; 4 DIMM slots",
        "Expansion Slots": "2 PCIe 3.0 x16, 2 PCIe 3.0 x12 PCI 2 - 5V PCI 32bit ***2 PCIe x16 slots are running at x16/NA or x8/x8 ***, M.2 Interface: 1 PCIe 3.0 x4 Form Factor: 2242/2260/2280 Key: M-Key"
    },
    {
        "name": "X11SAE-M",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11sae-m_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11sae-m.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "Micro-ATX",
        "Processor": "Single socket H4 (LGA 1151) supports  Intel\u00ae Xeon\u00ae processor E3-1200 v5/v6,  Intel\u00ae 6th/7th Gen. Core\u2122 i7/i5/i3 series,  Intel\u00ae Celeron\u00ae and Intel\u00ae Pentium\u00ae",
        "Memory": "Up to 64GB Unbuffered ECC/non-ECC UDIMM DDR4 2400MHz; 4 DIMM slots",
        "Expansion Slots": "1 PCIe 3.0 x16, 1 PCIe 3.0 x4 1 - 5V PCI 32bit, M.2 Interface: 1 PCIe 3.0 x4 Form Factor: 2242/2260/2280 Key: M-Key"
    },
    {
        "name": "X11SCL-F",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11scl-f_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11scl-f.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "microATX",
        "Processor": "8th/9th Generation Intel\u00ae Core\u2122i3/Pentium\u00ae/Celeron\u00ae Processor, Intel\u00ae Xeon\u00ae E-2100 Processor, Intel\u00ae Xeon\u00ae E-2200 Processor, Single Socket LGA-1151 (Socket H4) supported, CPU TDP supports Up to 95W TDP",
        "Memory": "Up to 128GB DDR4 2666MHz ECC UDIMM; 4 DIMM slots",
        "Expansion Slots": "1 PCIe 3.0 x8 (in x16), 2 PCIe 3.0 x4 (in x8), M.2 Interface: 1 PCIe 3.0 x4 Form Factor: 2280/22110 Key: M-Key"
    },
    {
        "name": "X11SPG-TF",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11spg-tf_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11spg-tf.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "Proprietary",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors, Single Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 205W TDP",
        "Memory": "Up to 1.5TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 1.5TB 3DS ECC LRDIMM, DDR4-2933MHz, in 6 DIMM slots",
        "Expansion Slots": "3 PCIe 3.0 x16 2x M.2 NGFF connectors M.2 Interface: PCIe 3.0 x4 Form Factor: 2280 Key: M-Key"
    },
    {
        "name": "X11SPM-F",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11spm-f_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11spm-f.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "microATX",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors, , Single Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 165W TDP",
        "Memory": "Up to 1.5TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 1.5TB 3DS ECC LRDIMM, DDR4-2933MHz, in 6 DIMM slots; Up to 1TB Intel Optane DC Persistent Memory in memory mode (Cascade Lake Only)",
        "Expansion Slots": "2 PCIe 3.0 x16, 1 PCIe 3.0 x8 (in x8), M.2 Interface: PCIe 3.0 x4, Form Factor: 2280, 2242, Key: M-Key"
    },
    {
        "name": "X11SPM-TPF",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11spm-tpf_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11spm-tpf.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "microATX",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors, , Single Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 165W TDP",
        "Memory": "Up to 1.5TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 1.5TB 3DS ECC LRDIMM, DDR4-2933MHz, in 6 DIMM slots; Up to 1TB Intel Optane DC Persistent Memory in memory mode (Cascade Lake Only)",
        "Expansion Slots": "2 PCIe 3.0 x16, 1 PCIe 3.0 x8 (in x8), M.2 Interface: PCIe 3.0 x4, Form Factor: 2280, 2242, Key: M-Key"
    },
    {
        "name": "X11SPW-TF",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11spw-tf_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11spw-tf.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "Proprietary WIO",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors, , Single Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 205W TDP",
        "Memory": "Up to 1.5TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 1.5TB 3DS ECC LRDIMM, DDR4-2933MHz, in 6 DIMM slots",
        "Expansion Slots": "1 PCIe 3.0 x8 (in x16 slot), 1 PCIe 3.0 x32 Left Riser Slot, M.2 Interface: PCIe 3.0 x4; SATA, Form Factor: 2280, 22110, Key: M-Key"
    }
]









function displayProducts() {
       // Get category from URL query parameters
       const queryString = window.location.search;
       const urlParams = new URLSearchParams(queryString);
       const category = urlParams.get('components');
       console.log('Category from URL:', category);
       console.log('test')
   
       // Get the product list container
       const productListContainer = document.querySelector('.product-list');
       productListContainer.innerHTML = ''; // Clear existing content
   
   
       if (!category) {
           productListContainer.innerHTML = '<p>Please select a valid category.</p>';
           return;
       }
   
       // Filter products based on the category
       const filteredProducts = products.filter(product => product.category === category);
   
       // Display message if no products are found
       if (filteredProducts.length === 0) {
           productListContainer.innerHTML = '<p>No products found for this category.</p>';
           return;
       }
   
       // Display filtered products
       filteredProducts.forEach(product => {
           const productDiv = document.createElement('div');
           productDiv.className = 'product1';
   
           productDiv.innerHTML = `
               <div class="imageProduct1">
                   <img src="${product.img}" alt="${product.name}">
               </div>
               <div class="productContent">
                   <p>${product.name}</p>
                   <p class="Chassis">Chassis: ${product.Chassis}</p>
                   <p class="learn_more">
                       <a href="${product.url}" target="_blank">Learn More</a>
                   </p>
               </div>
               <div class="congigur" onclick="navigateToProducts('${product.name}')">
                   Configure Now
               </div>
           `;
           productListContainer.appendChild(productDiv);
       });
   }




   






document.addEventListener('DOMContentLoaded', displayProducts);


function navigateToProducts(name) {
    window.location.href = `productlist.html?category=${encodeURIComponent(name)}`;
}

function navigateToComponents(name) {
    window.location.href = `componentList.html?components=${encodeURIComponent(name)}`;
}
function navigateproductDetails(name) {
    window.location.href = `productdetailPage.html?name=${encodeURIComponent(name)}`;
}