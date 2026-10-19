import type { ServicePageContent } from "./types";

export const servicePageContent: Record<string, ServicePageContent> = {
  "commercial-tariff-switching": {
    heroTitle: "Compare and switch business energy tariffs.",
    sections: [
      {
        label: "How your price is calculated",
        title: "Every business receives a different rate.",
        intro: [
          "Business energy tariffs are priced against the individual supply. Two organisations using the same annual amount can receive different offers because the location, meter type, consumption pattern, contract dates and credit position are different.",
          "We check the information suppliers will use before requesting prices, reducing the risk of an offer being withdrawn or changed because the original details were incomplete.",
        ],
        items: [
          {
            title: "Annual consumption",
            text: "The amount of electricity or gas used each year forms the basis of the supplier's price.",
          },
          {
            title: "Meter and supply type",
            text: "The MPAN or MPRN, electricity profile, metering arrangement and supply characteristics determine which contracts are available.",
          },
          {
            title: "Usage pattern",
            text: "When energy is used can affect the price, particularly for multi-rate and half-hourly electricity supplies.",
          },
          {
            title: "Business location",
            text: "Network and distribution costs vary across the UK and are reflected in supplier pricing.",
          },
          {
            title: "Contract dates",
            text: "The required start date and agreement length affect the wholesale and non-energy costs included in the quote.",
          },
          {
            title: "Credit and payment terms",
            text: "Suppliers may assess company history, payment record and credit position before confirming an offer.",
          },
        ],
      },
      {
        label: "Looking beyond the unit rate",
        title: "The lowest rate is not always the lowest annual cost.",
        intro: [
          "Standing charges can make a significant difference to a lower-usage site. For a larger consumer, even a small movement in the unit rate can materially affect the annual bill.",
          "We apply the same consumption information to each suitable offer so that day, night and weekend rates, standing charges and the complete contract can be compared on the same basis.",
        ],
        items: [
          {
            title: "Rates and charges",
            text: "Electricity or gas unit rates, daily standing charges and time-based rates where applicable.",
          },
          {
            title: "Estimated annual cost",
            text: "A like-for-like calculation based on the consumption information supplied.",
          },
          {
            title: "Contract dates and term",
            text: "The proposed start, end date and length of the agreement.",
          },
          {
            title: "Commercial conditions",
            text: "Payment method, credit requirements, supplier conditions and renewable electricity options where requested.",
          },
          {
            title: "Broker commission",
            text: "SwitchZero's commission and how it is calculated are explained before the agreement is entered into.",
          },
        ],
        note: "Estimated annual costs depend on the consumption information supplied. The amount ultimately paid will reflect actual usage and any taxes or charges that are not fixed under the contract.",
      },
      {
        label: "When to review your tariff",
        title: "Do not wait until the current contract has ended.",
        intro: [
          "A new business energy contract can often be arranged before the existing agreement expires. The available quotation window depends on the supplier, fuel, meter type and proposed contract length.",
          "If a contract expires without another agreement in place, the premises may move onto out-of-contract or deemed rates until the new contract begins.",
        ],
        items: [
          {
            title: "Approaching renewal",
            text: "We confirm the current end date and obtain prices for a new agreement beginning immediately afterwards.",
          },
          {
            title: "Already out of contract",
            text: "We identify the earliest available start date and compare suitable fixed agreements.",
          },
          {
            title: "Still mid-contract",
            text: "The next agreement may be arranged in advance, with the transfer normally taking place after the existing contract ends.",
          },
        ],
      },
    ],
    process: [
      {
        title: "Send a recent bill",
        text: "Provide the latest electricity or gas bill for every supply so we can verify the supplier, meter, annual consumption and current rates.",
      },
      {
        title: "Confirm the contract details",
        text: "We check the organisation and site information, establish the contract end date and arrange the authority needed to request prices.",
      },
      {
        title: "Compare available tariffs",
        text: "Suitable offers are presented using the same consumption figures, with estimated annual costs and important terms shown.",
      },
      {
        title: "Choose and switch",
        text: "You select the preferred offer and contract directly with the supplier. We manage the documentation and follow the switch through to its start date.",
      },
    ],
    faqs: [
      {
        question: "What information do you need to compare tariffs?",
        answer:
          "We normally need a recent electricity or gas bill, the current contract end date and confirmation of the business occupying the premises. The bill should show the MPAN for electricity or MPRN for gas, supplier, meter details and annual consumption.",
      },
      {
        question: "Will I need to sign a Letter of Authority?",
        answer:
          "Usually, yes. It allows SwitchZero to obtain relevant supply information and request prices on your behalf. It does not by itself allow us to enter your business into an energy supply contract.",
      },
      {
        question: "Will the energy supply be interrupted?",
        answer:
          "No. A supplier switch is an administrative change and energy continues through the same network, cables, pipes and meter. Separate meter or engineering work is different.",
      },
      {
        question: "Can I switch before my current contract ends?",
        answer:
          "A future contract can often be agreed in advance, but the new supply usually begins when the existing agreement ends. Leaving early may result in termination charges or a refused transfer.",
      },
      {
        question: "How long does switching take?",
        answer:
          "The contract can often be agreed quickly once accurate information and prices are available. The actual start date depends on the existing agreement, chosen supplier and whether the transfer is accepted without objection.",
      },
      {
        question: "What happens if my current supplier objects?",
        answer:
          "An objection may relate to an outstanding balance, an existing contract, incorrect site information or an unresolved change of tenancy. We help establish the reason, but the transfer can complete only after the objection is removed.",
      },
      {
        question: "Do you compare every business energy supplier?",
        answer:
          "Not every supplier quotes every organisation. Availability depends on meter type, consumption, location, credit position and start date. We compare suitable offers available through our supplier routes.",
      },
      {
        question: "Can you switch several business sites?",
        answer:
          "Yes. We can organise supplies across multiple locations. Larger portfolios, half-hourly meters or more complex structures may be handled through commercial energy procurement.",
      },
      {
        question: "How is SwitchZero paid?",
        answer:
          "SwitchZero may receive commission from the chosen supplier within the agreed energy price. Before contract, we explain how it is calculated and disclose the amount or estimated amount attributable to the agreement.",
      },
    ],
    ctaTitle: "Have a recent energy bill? Start there.",
    ctaText:
      "Send the latest bill for each premises. We will check the supplier, rates, consumption, meter details and contract end date before confirming when the supply can be quoted.",
  },

  "commercial-energy-procurement": {
    heroTitle: "Control how and when your business buys energy.",
    sections: [
      {
        label: "When a simple renewal is not enough",
        title: "Built for larger and more involved energy requirements.",
        intro: [
          "A straightforward tariff comparison may suit a smaller premises with predictable consumption. Procurement becomes more involved when an organisation uses significant volumes, operates several sites or needs greater control over how and when energy is purchased.",
        ],
        items: [
          {
            title: "Half-hourly supplies",
            text: "Detailed interval data shows suppliers when electricity is used and allows pricing against the actual load profile.",
          },
          {
            title: "Higher consumption",
            text: "For a larger user, a small difference in unit rate can have a substantial effect on annual and total contract cost.",
          },
          {
            title: "Multi-site portfolios",
            text: "Meters, consumption and renewal dates are organised across every location before the portfolio is tendered.",
          },
          {
            title: "Changing demand",
            text: "New equipment, longer hours, growth, solar PV or battery storage can materially change the amount bought from the grid.",
          },
          {
            title: "Budget requirements",
            text: "The structure should reflect the level of price certainty needed and the market movement the organisation can accept.",
          },
          {
            title: "Complex structures",
            text: "Wholesale energy, network costs, policy charges, metering and other non-energy costs must be understood before comparison.",
          },
        ],
      },
      {
        label: "Choosing how to buy",
        title: "Fixed, flexible or somewhere between the two.",
        intro: [
          "No purchasing method is automatically better or cheaper. The appropriate route depends on consumption, budget controls, internal decision-making and the organisation's ability to accept changes in the wholesale market.",
        ],
        items: [
          {
            title: "Fixed-price contracts",
            text: "Specified energy and non-energy costs are secured under an agreed structure for a set period, subject to the supplier terms.",
          },
          {
            title: "Fixed energy with pass-through charges",
            text: "The wholesale element is fixed while selected network, policy, system or metering charges are passed through at the applicable cost.",
          },
          {
            title: "Staged purchasing",
            text: "Wholesale volume is divided into purchases made at different points, reducing reliance on one day's price without guaranteeing a lower result.",
          },
          {
            title: "Flexible procurement",
            text: "Wholesale energy is purchased in agreed tranches, requiring clear controls, regular decisions and acceptance that prices can move either way.",
          },
          {
            title: "Multi-site tendering",
            text: "Several electricity or gas supplies are presented to the market through one coordinated tender.",
          },
          {
            title: "Contract alignment",
            text: "Different renewal dates are reviewed to see whether sites can move towards a common timetable without unnecessary cost.",
          },
        ],
      },
      {
        label: "Deciding when to buy",
        title: "The market cannot be predicted with certainty.",
        intro: [
          "Weather, demand, gas storage, generation availability and other commodity markets can influence future electricity and gas prices. No adviser can guarantee the lowest point.",
          "The purpose of procurement is to make a controlled decision based on the available information, required supply period and exposure the organisation is prepared to accept.",
        ],
        items: [
          {
            title: "Timing",
            text: "Current end dates, required start dates, supplier buying windows, contract lengths and the effect of delay.",
          },
          {
            title: "Risk and certainty",
            text: "Recent and longer-term market movement, desired budget certainty and whether purchases are made once or in stages.",
          },
          {
            title: "Decision readiness",
            text: "Internal authority, quotation deadlines and how quickly an approved offer can be accepted.",
          },
        ],
      },
      {
        label: "Building and comparing the tender",
        title: "Every supplier must price the same requirement.",
        intro: [
          "Incorrect consumption, missing meters or unrecorded operating changes can lead to prices being amended or withdrawn. We prepare a consistent commercial brief before approaching suitable suppliers.",
          "A tender is not decided by one number. Different offers can include or pass through different cost components, so we normalise the results and identify the terms that can affect cost during the agreement.",
        ],
        items: [
          {
            title: "Supply data",
            text: "Sites, MPANs, MPRNs, contract dates, start dates, annual consumption, interval data, operating hours and expected demand changes.",
          },
          {
            title: "Commercial brief",
            text: "Preferred lengths, fixed or flexible requirements, renewable options, payment information and response deadlines.",
          },
          {
            title: "Full cost comparison",
            text: "Wholesale pricing, rates, standing charges, fixed and pass-through costs, annual and total cost, metering, fees and renewable premiums.",
          },
          {
            title: "Contract conditions",
            text: "Volume tolerance, payment terms, credit requirements, quotation validity, supplier conditions and SwitchZero's commission or agreed fee.",
          },
        ],
      },
    ],
    process: [
      {
        title: "Define the requirement",
        text: "Review existing contracts, meters, consumption, renewal dates and expected operational changes.",
      },
      {
        title: "Prepare the tender",
        text: "Confirm the required structure, supply dates and commercial information before approaching suitable suppliers.",
      },
      {
        title: "Compare the offers",
        text: "Check supplier prices, cost components and important conditions on a comparable basis.",
      },
      {
        title: "Make the purchasing decision",
        text: "Once approved, confirm pricing, manage the documents and follow the agreement through acceptance.",
      },
      {
        title: "Manage the contract position",
        text: "Retain contract information, track key dates and support agreed staged or flexible purchasing decisions.",
      },
    ],
    faqs: [
      {
        question: "What is commercial energy procurement?",
        answer:
          "It is the process of planning, tendering and securing electricity or gas contracts, including the data presented, market timing, purchasing structure and commercial terms.",
      },
      {
        question: "How is procurement different from tariff switching?",
        answer:
          "Tariff switching usually compares straightforward fixed agreements for one premises. Procurement covers half-hourly supplies, larger loads, flexible purchasing, formal tenders and multi-site portfolios.",
      },
      {
        question: "Is flexible procurement cheaper than a fixed contract?",
        answer:
          "Not necessarily. It spreads wholesale purchases across several points and changes the risk profile, but prices may move higher before the remaining volume is bought.",
      },
      {
        question: "Does a fixed contract mean the entire bill is fixed?",
        answer:
          "Not always. Some agreements allow specified network, policy, system or metering charges to change. The supplier terms determine what is fixed and what may pass through.",
      },
      {
        question: "What are pass-through charges?",
        answer:
          "They are defined costs charged at the applicable rate rather than fixed for the full term. Depending on the product, these can include network, system, policy or metering costs.",
      },
      {
        question: "Why is half-hourly data required?",
        answer:
          "It shows electricity use in every 30-minute period, helping suppliers understand the site's load pattern and price the expected requirement more accurately.",
      },
      {
        question: "Can several sites be included in one tender?",
        answer:
          "Yes. Supplies across several locations can be organised in one procurement exercise and priced together, individually or under a combined arrangement.",
      },
      {
        question: "Can different contract end dates be aligned?",
        answer:
          "Sometimes. Shorter agreements or staged renewals may move sites towards a common date, but alignment should be used only when terms and total cost make sense.",
      },
      {
        question: "How early should procurement begin?",
        answer:
          "There is no universal window. Larger tenders should start early enough to verify data and agree commercial requirements before a price decision is required.",
      },
      {
        question: "How quickly must supplier prices be accepted?",
        answer:
          "Some offers last for a limited period and others can be repriced the same day. Internal authority and the acceptance process should be agreed before the tender is issued.",
      },
    ],
    ctaTitle: "Planning a major renewal or multi-site tender?",
    ctaText:
      "Bring SwitchZero into the process before supplier prices are required. We will review the contracts, bills, renewal dates and consumption data, then confirm the suitable purchasing routes.",
  },

  "business-electricity": {
    heroTitle: "Business electricity priced around your actual supply.",
    sections: [
      {
        label: "Understanding the site",
        title: "The right contract starts with the right supply information.",
        intro: [
          "The MPAN identifies an electricity supply point and the meter records how power is used. A building can contain more than one MPAN; if one is missed or priced against the wrong consumption, the contract may not cover the complete requirement.",
        ],
        items: [
          {
            title: "Single-rate supplies",
            text: "Consumption is charged at one unit rate regardless of when it is used, subject to the supplier terms.",
          },
          {
            title: "Multi-rate supplies",
            text: "Different day, night or weekend rates require the consumption in each period to be applied correctly.",
          },
          {
            title: "Interval-metered supplies",
            text: "Interval data shows the load pattern and periods of highest demand.",
          },
          {
            title: "Higher-capacity supplies",
            text: "Larger sites may have agreed kVA capacity plus additional network, metering or data costs.",
          },
          {
            title: "Multiple supplies",
            text: "Separate MPANs can serve different buildings, floors, tenants or operating areas.",
          },
          {
            title: "Import and export",
            text: "Sites with solar or other generation can import from the grid and export unused electricity under separate arrangements.",
          },
        ],
      },
      {
        label: "What makes up the bill",
        title: "Electricity costs more than the power being used.",
        intro: [
          "Some contracts combine most charges within unit rates and standing charges. Others show specified network, policy, metering or capacity costs separately. Each comparison must establish what is included and what can change.",
        ],
        items: [
          {
            title: "Unit rates",
            text: "The price for each kilowatt-hour, with one or several time-based rates depending on the supply.",
          },
          {
            title: "Standing charges",
            text: "A daily charge applied throughout the agreement, even when little or no electricity is used.",
          },
          {
            title: "Network and system costs",
            text: "The costs of transmitting, distributing and balancing electricity.",
          },
          {
            title: "Policy-related costs",
            text: "Government and industry charges supporting generation, capacity and environmental programmes.",
          },
          {
            title: "Capacity, metering and data",
            text: "Charges for agreed capacity, meter operation, data collection and related services where applicable.",
          },
          {
            title: "Taxes and levies",
            text: "VAT and Climate Change Levy treatment depends on the organisation and how electricity is used.",
          },
        ],
        note: "Estimated annual cost should include the relevant rates, standing charges and identified additional costs. Actual bills depend on consumption, taxes and any charges not fixed by the agreement.",
      },
      {
        label: "How the site uses power",
        title: "Annual consumption does not show the full picture.",
        intro: [
          "Two businesses can use the same annual kilowatt-hours while creating very different network demand. We examine daytime, overnight and weekend use, shifts, seasonality, baseload, peaks, capacity, power factor, separate meters and expected changes.",
        ],
        items: [
          {
            title: "New machinery and longer hours",
            text: "Additional equipment, new shifts and weekend operation can increase annual use, peaks and capacity requirements.",
          },
          {
            title: "Electric heating and EV charging",
            text: "Heat pumps and vehicle charging can materially increase demand, particularly where loads run together.",
          },
          {
            title: "Solar PV and storage",
            text: "On-site generation and batteries can reduce grid imports, change the load profile and create an export requirement.",
          },
          {
            title: "Relocation or tenancy change",
            text: "Opening and closing readings, occupancy dates and business information must be recorded correctly.",
          },
        ],
      },
      {
        label: "kVA and renewable options",
        title: "Review capacity and the evidence behind renewable claims.",
        intro: [
          "A larger site may be paying for more agreed capacity than it uses, or approaching its current limit. Before any change, recorded maximum demand, seasonal peaks, planned equipment, charging, heating, solar, storage and growth must be considered. Capacity changes remain subject to network approval.",
          "Renewable supply contracts can be supported by Renewable Energy Guarantees of Origin. The electricity still arrives through the same networks; the claim depends on evidence and contractual arrangements. A renewable contract, on-site solar and a PPA are different products and should be assessed separately.",
        ],
      },
    ],
    process: [
      {
        title: "Identify the supplies",
        text: "Collect a bill for every meter and confirm the MPAN, supplier, contract dates and business occupying the premises.",
      },
      {
        title: "Review consumption",
        text: "Check annual use, available interval data, operating hours and unusual demand patterns.",
      },
      {
        title: "Account for future changes",
        text: "Include new equipment, operating changes, solar, batteries, electric heating and vehicle charging.",
      },
      {
        title: "Obtain and compare prices",
        text: "Approach suitable suppliers using the same verified supply information.",
      },
      {
        title: "Confirm the agreement",
        text: "Check the selected offer before completing and submitting the supplier contract.",
      },
      {
        title: "Monitor the supply start",
        text: "Follow acceptance and remain available for transfer, meter or account issues.",
      },
    ],
    faqs: [
      {
        question: "What is an MPAN?",
        answer:
          "It is the unique reference identifying an electricity supply point. The 13-digit core is normally on the bill and differs from the serial number printed on the meter.",
      },
      {
        question:
          "What information is needed for a business electricity quote?",
        answer:
          "Usually a recent bill, MPAN, annual consumption, contract end date and confirmation of the occupier. Larger supplies may also require interval data, operating hours and expected demand changes.",
      },
      {
        question:
          "Why can two businesses receive different electricity prices?",
        answer:
          "Suppliers consider location, meter arrangement, annual consumption, usage pattern, start date, payment method and credit position.",
      },
      {
        question: "What is half-hourly electricity data?",
        answer:
          "It records consumption in each 30-minute period, showing when the premises uses power, peak demand and how use changes by day, week and season.",
      },
      {
        question: "What is the difference between kW, kWh and kVA?",
        answer:
          "kW measures active power at a point in time; kWh measures energy used over a period; kVA measures apparent power and is commonly used for commercial supply capacity.",
      },
      {
        question: "Can SwitchZero review several electricity meters?",
        answer:
          "Yes. We can organise MPANs, usage and contract information across one premises or several sites.",
      },
      {
        question: "What happens if we install solar during the contract?",
        answer:
          "Solar can reduce grid imports. The supply agreement should be checked for consumption or volume conditions, and exported electricity may need a separate arrangement.",
      },
      {
        question: "Can we purchase renewable electricity?",
        answer:
          "Yes, subject to availability. Compare the cost, terms and evidence supporting the claim rather than relying on the product name.",
      },
      {
        question: "Does a smart meter automatically reduce costs?",
        answer:
          "No. It can improve data and billing accuracy, but the organisation must act on the information to reduce waste.",
      },
      {
        question: "Does SwitchZero supply the electricity?",
        answer:
          "No. We review the requirement, obtain prices and manage contracting. The supply agreement is directly between your organisation and the licensed supplier.",
      },
    ],
    ctaTitle: "Start with your latest electricity bill.",
    ctaText:
      "Send a recent bill for every supply and details of planned site changes. We will check the MPAN, meter, consumption, current agreement and end date before confirming the options.",
  },

  "business-gas": {
    heroTitle: "Business gas contracts based on how your site uses gas.",
    sections: [
      {
        label: "Understanding the supply",
        title: "Start with the MPRN, meter and annual quantity.",
        intro: [
          "The Meter Point Reference Number identifies the gas supply; it differs from the serial number on the physical meter. The Annual Quantity is the expected 12-month consumption under normal seasonal conditions and may differ from the latest bills.",
        ],
        items: [
          {
            title: "MPRN and meter serial",
            text: "The MPRN identifies the supply point and the serial number identifies the installed meter; both should match the premises and records.",
          },
          {
            title: "Annual Quantity",
            text: "The market's expected annual consumption figure may need review if the organisation has changed how it operates.",
          },
          {
            title: "Meter units",
            text: "Meters can record cubic metres or, on older equipment, hundreds of cubic feet; the correct type is essential for calculation.",
          },
          {
            title: "Reading arrangement",
            text: "Readings can be manual, remote or interval-based depending on the meter and supply size.",
          },
          {
            title: "Multiple supplies",
            text: "A premises or property portfolio can contain several MPRNs serving different buildings, tenants, boilers or operating areas.",
          },
        ],
      },
      {
        label: "What makes up the bill",
        title: "The unit rate is only part of the cost.",
        intro: [
          "Gas offers commonly show a unit rate and daily standing charge, but network, transportation, metering, tax and supplier costs can also apply. We establish what is included and what can change during the agreement.",
        ],
        items: [
          {
            title: "Gas unit rate",
            text: "The amount charged for every kilowatt-hour consumed.",
          },
          {
            title: "Standing charge",
            text: "A daily charge throughout the agreement, including low- or no-use periods.",
          },
          {
            title: "Network and transportation",
            text: "Costs associated with moving gas through national and local networks.",
          },
          {
            title: "Metering and data",
            text: "Charges connected with the meter, data collection or reading arrangement where applicable.",
          },
          {
            title: "Taxes and levies",
            text: "VAT and Climate Change Levy treatment depends on quantity, use and eligibility for relief.",
          },
          {
            title: "Contract-specific conditions",
            text: "Payment, credit, volume and account conditions can affect total cost.",
          },
        ],
        note: "Our comparison shows rates, standing charges, annual consumption, annual cost, term, dates, payment method, fixed and variable elements, supplier conditions, and SwitchZero's commission and calculation method.",
      },
      {
        label: "Consumption, readings and future demand",
        title: "Gas demand can change sharply with the season.",
        intro: [
          "Hotels, care facilities and offices can use much more gas in winter, while process-led manufacturing can be more consistent. We review monthly and seasonal use, heating, hot water, production, occupancy, closures, controls, readings and expected operational changes.",
          "A gas meter records volume while the supplier bills kilowatt-hours after an industry conversion using the meter units, correction factor and calorific value. Incorrect units or estimated readings can produce catch-up bills or credits.",
        ],
        items: [
          {
            title: "Boiler or building upgrades",
            text: "Boiler replacement, insulation, glazing, draught reduction and controls can alter future gas demand.",
          },
          {
            title: "Heat pumps and electric heating",
            text: "Moving heat to electricity can reduce gas while increasing electrical consumption and peak demand.",
          },
          {
            title: "Production and hours",
            text: "New processes, shifts, weekend opening or changes in occupancy can raise or reduce the requirement.",
          },
          {
            title: "Readings and conversion",
            text: "We check actual versus estimated readings, serial number, units, unexplained changes, AQ, conversion, VAT and levy treatment.",
          },
        ],
      },
      {
        label: "Moving premises",
        title: "Record a change of tenancy from the correct date.",
        intro: [
          "An incoming business should provide the legal entity, occupancy date, opening meter reading and evidence of the change. Until another agreement is arranged, the supplier may charge deemed rates. An outgoing occupier should give a closing reading and departure date.",
        ],
        items: [
          {
            title: "Landlord and tenant responsibilities",
            text: "The lease should identify who is responsible for the account, and the supply contract should name the paying organisation.",
          },
          {
            title: "Vacant premises",
            text: "Standing charges and other costs may continue while the supply remains live, even with no consumption.",
          },
          {
            title: "Meter removal or disconnection",
            text: "Removal, relocation or disconnection requires separate arrangements and is not completed through a standard supplier switch.",
          },
        ],
      },
    ],
    process: [
      {
        title: "Identify the supply",
        text: "Confirm the MPRN, supplier, meter information and organisation occupying the premises.",
      },
      {
        title: "Check the contract position",
        text: "Review current rates, end date and required authority before asking for prices.",
      },
      {
        title: "Review consumption",
        text: "Examine AQ, billing history and seasonal or operational changes affecting future use.",
      },
      {
        title: "Obtain and compare prices",
        text: "Approach suitable suppliers with consistent data and compare annual cost and conditions.",
      },
      {
        title: "Confirm the agreement",
        text: "Check the selected offer before completing and submitting the supplier contract.",
      },
      {
        title: "Monitor the supply start",
        text: "Follow acceptance and remain available for objections, metering or account issues.",
      },
    ],
    faqs: [
      {
        question: "What is an MPRN?",
        answer:
          "The Meter Point Reference Number uniquely identifies a gas supply point. It is normally on the bill and differs from the meter serial number.",
      },
      {
        question: "What information is needed for a business gas quote?",
        answer:
          "Usually a recent bill, MPRN, annual consumption, contract end date and occupier confirmation. Larger requirements may also need history, meter information and expected changes.",
      },
      {
        question: "What is the Annual Quantity?",
        answer:
          "AQ represents expected gas use over 12 months under normal seasonal conditions and may not match the latest 12 months of billed consumption.",
      },
      {
        question: "Why can two businesses receive different gas prices?",
        answer:
          "Suppliers consider location, AQ, usage pattern, start date, term, payment method and credit position.",
      },
      {
        question: "Why is gas measured in volume but billed in kWh?",
        answer:
          "The meter records volume and the supplier converts it to kilowatt-hours using meter units, correction factor and calorific value.",
      },
      {
        question: "What happens if bills are estimated?",
        answer:
          "When an actual reading is supplied, the account should be recalculated and may produce either a catch-up charge or a credit.",
      },
      {
        question: "Will a smart or AMR meter reduce gas costs?",
        answer:
          "Not by itself. Remote readings can improve accuracy and data, but the organisation must act on the information to reduce waste.",
      },
      {
        question: "Do businesses pay VAT and Climate Change Levy on gas?",
        answer:
          "They may. Treatment depends on quantity, purpose and eligibility for relief; the supplier may require a declaration or evidence.",
      },
      {
        question: "What happens when we move into new premises?",
        answer:
          "Contact the registered supplier with the occupancy date, opening reading and account information. Deemed rates may apply until a new agreement begins.",
      },
      {
        question: "Can a new contract be arranged before the current one ends?",
        answer:
          "Often, yes. It normally starts after the existing agreement, subject to the supplier's quotation window.",
      },
      {
        question: "Will gas be interrupted when we switch?",
        answer:
          "No. A supplier switch is administrative and gas continues through the same pipes and meter unless separate engineering work is arranged.",
      },
      {
        question: "Can SwitchZero review several gas meters?",
        answer:
          "Yes. We can organise MPRNs, consumption and contract information across several meters or locations.",
      },
      {
        question: "Can gas and electricity be arranged separately?",
        answer:
          "Yes. They are separate contracts and should each be compared against their own consumption, dates and requirements.",
      },
      {
        question: "Does SwitchZero supply the gas?",
        answer:
          "No. We review the requirement, obtain suitable prices and manage the process. The agreement is directly with the licensed supplier.",
      },
    ],
    ctaTitle: "Start with your latest gas bill.",
    ctaText:
      "Send a recent bill for every gas supply and details of planned changes. We will check the MPRN, meter, consumption, current agreement and end date before confirming the options.",
  },
  "commercial-solar-pv": {
    heroTitle:
      "Commercial solar PV designed around how your business uses electricity.",
    sections: [
      {
        label: "The commercial case",
        title: "The right system is not simply the most panels that will fit.",
        intro: [
          "Commercial solar can reduce grid purchases, lower long-term costs and support carbon goals. The recommendation must still be based on electricity use, operating hours, roof or land, structure, shading, electrical infrastructure and the network connection.",
          "Every proposal sets out the recommended system size, forecast generation, on-site use, export, expected savings, project cost, payback and the assumptions behind those figures.",
        ],
        items: [
          {
            title: "Lower electricity costs",
            text: "Generate and use electricity at the premises, reducing the amount purchased from the grid.",
          },
          {
            title: "Reduced market exposure",
            text: "Producing more electricity on-site can reduce reliance on future market rates.",
          },
          {
            title: "Lower carbon emissions",
            text: "Reduce emissions associated with imported electricity and support sustainability targets.",
          },
          {
            title: "Greater energy independence",
            text: "Generate power directly at the premises and rely less on grid imports.",
          },
          {
            title: "Long-term commercial value",
            text: "Create an on-site asset capable of producing savings over many years.",
          },
          {
            title: "Support future demand",
            text: "Design around future machinery, electric heating, vehicle charging or expansion.",
          },
        ],
      },
      {
        label: "Built around your business",
        title: "Match generation to demand, then test the site constraints.",
        intro: [
          "We compare consumption with expected generation to establish how much electricity is likely to be used on-site, stored or exported. Roof condition, structural suitability, network restrictions and future demand are assessed before the design is finalised.",
        ],
        items: [
          {
            title: "Feasibility and structure",
            text: "Review roof or land, shading, access, planning and structural condition.",
          },
          {
            title: "Usage and generation modelling",
            text: "Model the site's consumption against forecast solar output and likely export.",
          },
          {
            title: "Bespoke solar and battery design",
            text: "Size the array, inverters and optional storage around the operating profile.",
          },
          {
            title: "Approvals and delivery",
            text: "Coordinate DNO approval, permissions, installation, commissioning and monitoring.",
          },
        ],
      },
    ],
    process: [
      {
        title: "Assess the site",
        text: "Collect bills and interval data, inspect roof or land and understand operating hours and future plans.",
      },
      {
        title: "Model the system",
        text: "Compare forecast generation with on-site use, storage and export under realistic assumptions.",
      },
      {
        title: "Confirm permissions and funding",
        text: "Address structural, planning, network and property requirements and compare capital, finance or PPA routes.",
      },
      {
        title: "Install and monitor",
        text: "Coordinate delivery and track performance against the agreed design assumptions.",
      },
    ],
    faqs: [
      {
        question: "Is my business suitable for commercial solar?",
        answer:
          "Many buildings with suitable roof or land can benefit, but electricity use, structural condition, shading, access, planning and network capacity must be assessed first.",
      },
      {
        question: "How much can solar reduce electricity costs?",
        answer:
          "It depends on system size and how closely generation matches daytime use. We model on-site consumption, export and savings using the organisation's data.",
      },
      {
        question: "Can solar panels be combined with battery storage?",
        answer:
          "Yes. A battery can retain surplus electricity for later use, but it should be included only where the usage profile and additional savings justify its cost.",
      },
      {
        question: "Are funding options available?",
        answer:
          "Solar may be funded by capital purchase, asset finance or a power purchase agreement. Grants can sometimes help, but eligibility and availability must be confirmed at the time.",
      },
    ],
    ctaTitle: "Start with your electricity use and the site.",
    ctaText:
      "Share recent bills, available interval data, operating hours and roof or land information. We will test whether commercial solar has a credible technical and financial case.",
  },
  "battery-storage": {
    heroTitle:
      "Commercial battery storage with a defined job and a proven operating case.",
    sections: [
      {
        label: "Where storage can add value",
        title: "A battery stores electricity; it does not generate it.",
        intro: [
          "Battery storage can capture surplus solar, reduce grid imports during more expensive periods and help manage short demand peaks. It is not automatically worthwhile for every organisation.",
          "We review half-hourly consumption, peaks, tariff structure, solar generation, exports and future requirements before recommending capacity, power and an operating strategy.",
        ],
        items: [
          {
            title: "Use more solar electricity",
            text: "Store surplus daytime generation and use it after the panels are producing less.",
          },
          {
            title: "Reduce expensive imports",
            text: "Charge in lower-cost periods and discharge when prices are higher where the tariff supports it.",
          },
          {
            title: "Manage peak demand",
            text: "Use stored electricity during short peaks to ease pressure on the connection and potentially reduce applicable demand costs.",
          },
          {
            title: "Reduce low-value export",
            text: "Keep generation on-site where later use is more valuable than immediate export.",
          },
          {
            title: "Support future demand",
            text: "Help manage additional demand from vehicles, heating, machinery or longer hours.",
          },
          {
            title: "Operational resilience",
            text: "Backup is possible only where the system, isolation, controls and selected circuits are specifically designed for it.",
          },
        ],
      },
      {
        label: "Sizing and controls",
        title: "Capacity and power must both fit the load.",
        intro: [
          "Battery capacity is measured in kilowatt-hours and charge or discharge power in kilowatts. Oversizing either can add cost without producing more savings.",
          "We model charging and discharging across a typical day, including solar, grid imports, exports, peaks and tariffs. Location, electrical infrastructure, network restrictions, fire safety and future demand are also considered.",
        ],
        items: [
          {
            title: "Interval analysis",
            text: "Use half-hourly consumption and demand data rather than an annual total.",
          },
          {
            title: "Solar, export and tariff modelling",
            text: "Test when the battery can charge, discharge and create value.",
          },
          {
            title: "Bespoke system design",
            text: "Select battery, inverter and control systems for the required use case.",
          },
          {
            title: "Approvals and monitoring",
            text: "Coordinate DNO approval, installation, safety requirements and ongoing performance review.",
          },
        ],
      },
    ],
    process: [
      {
        title: "Define the use case",
        text: "Decide whether the priority is solar retention, tariff shifting, peak management, resilience or a combination.",
      },
      {
        title: "Model the operation",
        text: "Simulate charging, discharging, losses and available cycles against half-hourly data.",
      },
      {
        title: "Design and approve",
        text: "Confirm power, capacity, controls, location, network and fire-safety requirements.",
      },
      {
        title: "Install and review",
        text: "Commission the system and monitor whether it is performing the job on which the investment was based.",
      },
    ],
    faqs: [
      {
        question: "Is my business suitable for battery storage?",
        answer:
          "Storage is most likely to add value where there is surplus solar, regular demand peaks, time-based pricing or a defined resilience need. Actual consumption data should be assessed first.",
      },
      {
        question: "How much can battery storage reduce electricity costs?",
        answer:
          "Savings depend on charging and discharging times, prices, efficiency and how often useful capacity can be cycled. We model these factors rather than using a standard percentage.",
      },
      {
        question: "Can battery storage work without solar?",
        answer:
          "Yes. A standalone battery can charge from the grid in lower-cost periods and discharge when prices or demand are higher, subject to tariff, losses and network arrangements.",
      },
      {
        question:
          "Will a battery keep the business running during a power cut?",
        answer:
          "Only if it is specifically designed for backup, with suitable isolation, controls and circuits. The required size depends on what must run and for how long.",
      },
    ],
    ctaTitle: "Give the battery a clear job before sizing it.",
    ctaText:
      "Share half-hourly data, tariffs, solar generation and future demand. We will assess whether storage has a credible operating and financial case.",
  },
  "energy-management-systems": {
    heroTitle: "Turn commercial energy data into action.",
    sections: [
      {
        label: "What an EMS can deliver",
        title: "A dashboard alone will not reduce costs.",
        intro: [
          "An energy management system can combine meters, sensors, software and controls to show how, where and when electricity and gas are used. The value comes from deciding what to monitor, who responds and what action follows.",
        ],
        items: [
          {
            title: "See where consumption occurs",
            text: "Monitor buildings, departments, machinery or individual areas rather than relying only on the main meter.",
          },
          {
            title: "Identify avoidable waste",
            text: "Find equipment running out of hours, unusual increases and loads using more than expected.",
          },
          {
            title: "Improve operational control",
            text: "Use schedules, alerts and compatible controls for lighting, heating, cooling and other equipment.",
          },
          {
            title: "Manage peak demand",
            text: "Identify the highest-demand periods and whether suitable loads can be reduced, moved or supported by storage.",
          },
          {
            title: "Measure projects",
            text: "Track actual results from solar, batteries, heating, lighting and other upgrades.",
          },
          {
            title: "Support better decisions",
            text: "Use reliable data to prioritise investment and review capacity and long-term strategy.",
          },
        ],
      },
      {
        label: "Built around your business",
        title: "More data is not automatically more useful.",
        intro: [
          "The right system may range from main-meter monitoring to detailed submetering and automated controls across multiple locations. Each meter, sensor and alert should answer a clear commercial or operational question.",
        ],
        items: [
          {
            title: "Analysis",
            text: "Review consumption, tariffs, operating hours and the existing baseline.",
          },
          {
            title: "Load mapping",
            text: "Map significant loads, existing meters, building controls and communications before designing submetering.",
          },
          {
            title: "Dashboards and controls",
            text: "Define reporting, alerts, control integration and the people responsible for acting.",
          },
          {
            title: "Delivery and review",
            text: "Install, commission, train users and keep performance under review.",
          },
        ],
      },
    ],
    process: [
      {
        title: "Set the questions",
        text: "Agree which costs, loads, locations or operating issues the system needs to expose.",
      },
      {
        title: "Map data and equipment",
        text: "Use available supply data and identify where meters, sensors or integrations add useful detail.",
      },
      {
        title: "Build the reporting route",
        text: "Configure dashboards, alerts, schedules and clear responsibility for response.",
      },
      {
        title: "Act and measure",
        text: "Complete agreed changes and measure whether improvements persist over time.",
      },
    ],
    faqs: [
      {
        question: "What does an energy management system do?",
        answer:
          "It organises utility data and can provide live monitoring, historic reporting, alerts, equipment schedules and direct control of compatible assets.",
      },
      {
        question: "How much can an energy management system save?",
        answer:
          "The system creates no saving by itself. Results depend on the waste found, changes made and whether those changes are maintained.",
      },
      {
        question: "Is an EMS the same as a smart meter or BMS?",
        answer:
          "No. A smart meter mainly records the supply and a BMS usually controls services such as heating and ventilation. An EMS can combine both with submeters, tariffs, generation and equipment data.",
      },
      {
        question: "Can it work with solar and battery storage?",
        answer:
          "Yes. It can monitor generation, imports, exports and battery activity and, where controls are compatible, help coordinate storage, EV charging and other flexible loads.",
      },
    ],
    ctaTitle: "See where energy is going before deciding what to change.",
    ctaText:
      "We will review existing data, meters, controls and operating priorities, then recommend a proportionate monitoring and action plan.",
  },
  "commercial-ev-charging": {
    heroTitle:
      "Commercial EV charging planned around vehicles, dwell time and site capacity.",
    sections: [
      {
        label: "The charging requirement",
        title: "The fastest charger is not automatically the right option.",
        intro: [
          "Charging can support business fleets, workplace vehicles, customers and visitors. The design depends on who uses it, vehicle mileage, how long vehicles remain parked and the electricity available at the site.",
        ],
        items: [
          {
            title: "Support electric fleets",
            text: "Provide reliable charging around mileage, schedules and required departure times.",
          },
          {
            title: "Control charging costs",
            text: "Schedule charging in lower-cost periods or when on-site solar is available.",
          },
          {
            title: "Manage site capacity",
            text: "Use dynamic load management to balance charging against building demand.",
          },
          {
            title: "Support staff and customers",
            text: "Offer charging as a workplace benefit or visitor service.",
          },
          {
            title: "Recover charging costs",
            text: "Control access, tariffs, payments and reporting through suitable software.",
          },
          {
            title: "Expand over time",
            text: "Install infrastructure for current demand while allowing later charge points.",
          },
        ],
      },
      {
        label: "Built around your business",
        title: "Provide enough energy within the parking window.",
        intro: [
          "We assess vehicle compatibility, parking duration, mileage, maximum site demand and network capacity. Workplace and public charging may also need access controls, payments, bay design, signage, accessibility and ongoing management.",
        ],
        items: [
          {
            title: "Demand analysis",
            text: "Map vehicles, daily mileage, schedules and charging windows.",
          },
          {
            title: "Electrical assessment",
            text: "Review current capacity, maximum demand and potential network work.",
          },
          {
            title: "System design",
            text: "Specify chargers, cable routes, bays and dynamic load management.",
          },
          {
            title: "Delivery and management",
            text: "Coordinate installation, commissioning, software and operating support.",
          },
        ],
      },
    ],
    process: [
      {
        title: "Understand vehicle use",
        text: "Record fleet duties, staff and visitor needs, parking duration and future vehicle numbers.",
      },
      {
        title: "Check the electricity supply",
        text: "Assess capacity, maximum demand, solar, storage and possible network constraints.",
      },
      {
        title: "Design for current and future demand",
        text: "Select charger mix, load control, cable routes, access and payment arrangements.",
      },
      {
        title: "Install and operate",
        text: "Commission the system and review utilisation, costs and expansion needs.",
      },
    ],
    faqs: [
      {
        question: "Which type of EV charger does my business need?",
        answer:
          "AC charging often suits vehicles parked for several hours or overnight. Faster DC charging may suit short turnarounds. The answer depends on vehicles, parking time, power and the commercial case.",
      },
      {
        question: "Will we need to increase electrical capacity?",
        answer:
          "Not necessarily. Load management can share existing capacity, but a network upgrade may still be needed if the available supply is insufficient.",
      },
      {
        question: "Can chargers work with solar and batteries?",
        answer:
          "Yes. Charging can be coordinated with generation and storage, but value depends on when vehicles connect, how much power they need and whether extra equipment is justified.",
      },
      {
        question: "Can staff, customers or the public pay to charge?",
        answer:
          "Yes. Suitable software can control access, collect payments, set tariffs and record sessions. Public charging can require additional accessibility, signage and operating arrangements.",
      },
    ],
    ctaTitle: "Plan charging around the vehicles and the site.",
    ctaText:
      "Tell us which vehicles will charge, how far they travel, how long they park and what future growth is expected. We will assess the power requirements and delivery route.",
  },
  "efficiency-upgrades": {
    heroTitle:
      "Commercial energy efficiency upgrades ranked by real operational value.",
    sections: [
      {
        label: "Reduce avoidable consumption",
        title: "Replacing equipment does not automatically guarantee a saving.",
        intro: [
          "Efficiency improvements can address waste from lighting, heating, cooling, insulation, motors, refrigeration, compressed air and controls. We review consumption, operating hours, buildings, current equipment and future plans before recommending work.",
        ],
        items: [
          {
            title: "Lower energy costs",
            text: "Reduce unnecessary electricity and gas use instead of relying solely on supply-contract changes.",
          },
          {
            title: "Reduce avoidable waste",
            text: "Identify out-of-hours operation, excessive heating or cooling and inefficient settings.",
          },
          {
            title: "Improve comfort",
            text: "Create more consistent lighting, heating, cooling and ventilation.",
          },
          {
            title: "Improve equipment performance",
            text: "Optimise or replace inefficient equipment to improve reliability and reduce strain.",
          },
          {
            title: "Lower carbon emissions",
            text: "Reduce the energy required to operate the premises.",
          },
          {
            title: "Prioritise investment",
            text: "Direct available budgets towards the strongest operational and financial value.",
          },
        ],
      },
      {
        label: "A prioritised programme",
        title:
          "The best first step may be a control change, not new equipment.",
        intro: [
          "Each measure is assessed against expected saving, cost, disruption and remaining asset life. A baseline is established before work so completed improvements can be reviewed fairly against changes in occupancy, production, hours and weather.",
        ],
        items: [
          {
            title: "Data and operating-hours analysis",
            text: "Use bills and interval information to identify baseload and abnormal patterns.",
          },
          {
            title: "Site and equipment assessment",
            text: "Inspect significant equipment, controls, condition and maintenance needs.",
          },
          {
            title: "Costed priorities",
            text: "Rank recommendations by saving, cost, payback, disruption and delivery readiness.",
          },
          {
            title: "Installation and measurement",
            text: "Support delivery and review post-project consumption against the baseline.",
          },
        ],
      },
    ],
    process: [
      {
        title: "Establish the baseline",
        text: "Review electricity, gas, interval data, operating hours and significant changes.",
      },
      {
        title: "Inspect the operation",
        text: "Assess equipment, controls, schedules, building fabric and how users interact with the site.",
      },
      {
        title: "Prioritise the measures",
        text: "Separate low-cost operational actions from justified capital improvements.",
      },
      {
        title: "Deliver and verify",
        text: "Coordinate the work and measure performance against a fair baseline.",
      },
    ],
    faqs: [
      {
        question: "What types of efficiency upgrades can you assess?",
        answer:
          "Lighting, heating, cooling, ventilation, insulation, controls, motors, pumps, refrigeration, compressed air and other significant energy-consuming equipment.",
      },
      {
        question: "How much could our business save?",
        answer:
          "It depends on current equipment, hours, controls and the completed measures. We assess recommendations against available data instead of applying a standard percentage.",
      },
      {
        question: "Do we need to replace all existing equipment?",
        answer:
          "No. Schedules, settings, maintenance and control changes may help. Replacement should be recommended only when condition, efficiency and return justify it.",
      },
      {
        question: "How are savings measured?",
        answer:
          "We compare post-project use with a pre-project baseline while accounting for changes in operating hours, production, occupancy and weather.",
      },
    ],
    ctaTitle:
      "Build the improvement list from real consumption and equipment condition.",
    ctaText:
      "We will identify avoidable waste, rank operational and capital measures, and explain the cost, disruption, assumptions and expected return.",
  },
  "power-purchase-agreements": {
    heroTitle:
      "Understand the full commercial solar PPA, not just the starting rate.",
    sections: [
      {
        label: "How a solar PPA works",
        title: "A PPA is not free solar.",
        intro: [
          "A third-party provider pays for and owns the solar installation while the business buys the electricity generated at an agreed rate for a fixed term. It is a long-term electricity and property agreement.",
          "Every proposal should show the rate, indexation, term, forecast savings, maintenance responsibilities, property requirements, buyout options and end-of-term position.",
        ],
        items: [
          {
            title: "Avoid the capital purchase cost",
            text: "Install solar without funding the full system upfront, subject to the proposal.",
          },
          {
            title: "Reduce electricity costs",
            text: "Buy on-site generation at an agreed rate intended to save against comparable grid electricity.",
          },
          {
            title: "Improve price visibility",
            text: "Understand how the rate changes over the term, including indexation.",
          },
          {
            title: "Preserve capital",
            text: "Keep business funds for other operating priorities.",
          },
          {
            title: "Include maintenance",
            text: "The system owner normally retains monitoring and maintenance responsibilities.",
          },
          {
            title: "Lower carbon emissions",
            text: "Use renewable electricity generated at the premises and reduce imports.",
          },
        ],
      },
      {
        label: "A long-term property agreement",
        title: "Lifetime cost and obligations decide whether the PPA works.",
        intro: [
          "We compare proposed generation with actual electricity use and assess payments across the full term. Landlord and lender consent, roof access, repairs, insurance, tenant changes, sale, early termination and equipment removal must all be addressed.",
          "The lowest starting rate is not automatically best. Indexation, term, minimum payment, export rights, buyout cost and end-of-term options need to be understood together.",
        ],
        items: [
          {
            title: "Site and generation modelling",
            text: "Test feasibility, on-site use and forecast solar output.",
          },
          {
            title: "Pricing and lifetime cost",
            text: "Assess rate, indexation, minimum obligations and total payments.",
          },
          {
            title: "Property requirements",
            text: "Review lease, landlord, lender, occupancy, insurance, access and repair obligations.",
          },
          {
            title: "Provider and delivery",
            text: "Coordinate the provider, design, installation and performance support.",
          },
        ],
      },
    ],
    process: [
      {
        title: "Confirm site and load",
        text: "Assess the property and how much generated electricity the business can use.",
      },
      {
        title: "Compare funding routes",
        text: "Set the PPA against capital purchase and asset finance on a consistent basis.",
      },
      {
        title: "Review the contract",
        text: "Expose pricing, indexation, term, property duties, change scenarios and exit options.",
      },
      {
        title: "Coordinate delivery",
        text: "Support approvals, installation and performance management with the chosen provider.",
      },
    ],
    faqs: [
      {
        question: "How does a commercial solar PPA work?",
        answer:
          "A third party funds, owns and normally maintains the system. The business purchases its electricity under an agreed price and term. SwitchZero coordinates the opportunity but does not fund or own the equipment.",
      },
      {
        question: "Is a solar PPA completely free?",
        answer:
          "No. There may be no upfront equipment purchase, but the business pays for generated electricity and may have survey, legal, roof, network or early-termination costs.",
      },
      {
        question: "What happens if the property is sold or the tenant changes?",
        answer:
          "The PPA does not disappear. It may transfer to the new party or require a buyout or termination route agreed with the owner, lender and provider.",
      },
      {
        question: "What happens at the end of the PPA?",
        answer:
          "Depending on the contract, options can include purchase, extension, ownership transfer or removal. The price, condition and process should be agreed from the outset.",
      },
    ],
    ctaTitle: "Review the full PPA before committing the property.",
    ctaText:
      "We will test generation against site use and compare price, indexation, term, property obligations, buyout and end-of-term options.",
  },
  "funding-and-asset-finance": {
    heroTitle:
      "Compare asset finance, grant support and the complete project cost.",
    sections: [
      {
        label: "Commercial asset finance",
        title: "Spread the project cost without hiding the total commitment.",
        intro: [
          "Asset finance can spread the cost of eligible solar, battery, EV charging, energy-management and efficiency equipment. Finance does not make a project cheaper: interest, fees, deposits, term and final payments can increase total cost.",
        ],
        items: [
          {
            title: "Preserve working capital",
            text: "Keep funds available for other priorities instead of paying the complete project cost upfront.",
          },
          {
            title: "Spread the project cost",
            text: "Use agreed instalments over a fixed period.",
          },
          {
            title: "Bring projects forward",
            text: "Complete justified work sooner rather than waiting for full capital.",
          },
          {
            title: "Improve budget visibility",
            text: "Understand deposit, repayment, term and any final payment.",
          },
          {
            title: "Generate savings during the term",
            text: "Equipment can begin reducing costs while finance is repaid, subject to performance.",
          },
          {
            title: "Potentially own the equipment",
            text: "Some arrangements transfer ownership after all required payments.",
          },
        ],
        note: "Finance is subject to application, credit assessment, status and lender approval. SwitchZero does not provide finance or make lending decisions. Tax, VAT and accounting treatment should be checked professionally.",
      },
      {
        label: "Comparing finance",
        title:
          "The lowest monthly repayment is not automatically the best offer.",
        intro: [
          "A low payment may result from a longer term, larger deposit, balloon payment or different ownership structure. We compare the cash purchase and financed routes, repayment, total payable, cash flow, asset life, warranties, maintenance, ownership, early settlement, security and end-of-term conditions.",
        ],
      },
      {
        label: "Commercial grant funding",
        title:
          "A grant should improve a project that already has a credible case.",
        intro: [
          "Grant funding can contribute to eligible solar, battery, EV charging, heating, controls and efficiency work. It is not guaranteed. Rules can cover eligibility, deadlines, match funding, procurement and completion, and starting work before written approval may make a project ineligible.",
        ],
        items: [
          {
            title: "Reduce net project cost",
            text: "Use an approved contribution to reduce the organisation's eligible expenditure.",
          },
          {
            title: "Improve payback",
            text: "A lower net investment can improve the financial return.",
          },
          {
            title: "Bring projects forward",
            text: "Progress suitable work sooner where the funding window allows.",
          },
          {
            title: "Extend available budgets",
            text: "Combine business funds with support to deliver more eligible measures.",
          },
          {
            title: "Support coordinated upgrades",
            text: "Some schemes can cover several measures within one project.",
          },
          {
            title: "Accelerate carbon reduction",
            text: "Deliver suitable improvements that reduce consumption and grid reliance.",
          },
        ],
        note: "Grant support is subject to availability, eligibility, assessment and formal approval by the funding body. SwitchZero does not award grants or guarantee success.",
      },
      {
        label: "Application and cash flow",
        title: "Show the business case with and without the grant.",
        intro: [
          "We review initial eligibility, technical evidence, quotations, procurement requirements, the organisation's contribution and when funding is paid. Some grants reimburse expenditure after completion, so the project cash flow must work before an application proceeds.",
        ],
      },
    ],
    process: [
      {
        title: "Confirm the project case",
        text: "Review scope, forecast savings, project cost, permissions and delivery readiness.",
      },
      {
        title: "Compare funding routes",
        text: "Set capital, finance, PPA and potential grant support against the same commercial assumptions.",
      },
      {
        title: "Review terms and eligibility",
        text: "Check deposits, repayments, total payable, ownership, security, eligible costs, match funding and procurement rules.",
      },
      {
        title: "Coordinate application and evidence",
        text: "Support finance-provider or grant-body information, quotations, approvals, completion evidence and claims.",
      },
    ],
    faqs: [
      {
        question: "What projects can use asset finance?",
        answer:
          "Subject to lender eligibility, solar, batteries, EV chargers, energy-management equipment and some efficiency upgrades may qualify.",
      },
      {
        question: "How does commercial asset finance work?",
        answer:
          "A third-party provider funds or purchases eligible equipment and the business makes agreed payments. Hire purchase, finance leases and other structures have different ownership and end-of-term conditions.",
      },
      {
        question: "Will the savings cover the repayments?",
        answer:
          "Possibly, but it should not be assumed. Forecast savings must be compared with deposit, repayments, finance charges and total payable.",
      },
      {
        question: "Who owns financed equipment?",
        answer:
          "It depends on the agreement. Hire purchase may transfer ownership after all payments; a finance lease may leave ownership with the provider.",
      },
      {
        question: "What energy projects can receive grants?",
        answer:
          "It depends on the scheme. Potential measures include solar, batteries, EV charging, heating, insulation, lighting, controls and efficient equipment; location, sector, size and legal status may also matter.",
      },
      {
        question: "How much grant funding could we receive?",
        answer:
          "Schemes can cover a percentage, a fixed contribution or a capped amount. Match funding, excluded costs and VAT treatment must be checked.",
      },
      {
        question: "Can we start before grant approval?",
        answer:
          "Do not place orders, pay deposits or start installation until the rules are checked and any required written approval is received.",
      },
      {
        question: "When is grant funding paid?",
        answer:
          "Some schemes pay at stages; others reimburse after work has been completed, paid for and verified. The business must plan the required cash flow.",
      },
    ],
    ctaTitle: "Compare the project and funding together.",
    ctaText:
      "We will set out capital, finance, PPA and potential grant routes with their total costs, cash-flow effects, ownership and approval conditions.",
  },
  "energy-consultancy": {
    heroTitle:
      "A joined-up commercial energy plan that continues beyond the next contract.",
    sections: [
      {
        label: "More than procurement",
        title: "Manage supply, consumption and future projects in one view.",
        intro: [
          "SwitchZero brings procurement, energy management and renewable technologies together so organisations do not have to coordinate several providers with competing priorities.",
        ],
        items: [
          {
            title: "Energy procurement",
            text: "Compare suitable commercial electricity and gas contracts based on the organisation's requirements.",
          },
          {
            title: "Renewable energy",
            text: "Assess solar PV and battery storage against property, consumption and long-term plans.",
          },
          {
            title: "Energy management",
            text: "Identify where energy is being used and where avoidable cost may be reduced.",
          },
          {
            title: "Funding and project support",
            text: "Review finance, PPA and grant routes and coordinate suitable work from assessment to delivery.",
          },
        ],
      },
      {
        label: "A strategy built around the operation",
        title: "Understand first, compare second, deliver what stands up.",
        intro: [
          "Recommendations begin with the organisation, its sites, contracts, operating needs and planned changes. Options are presented with their costs, responsibilities, assumptions and risks before any route is agreed.",
          "The objective is not to sell every service. It is to decide what is worth doing now, what needs further assessment and what should not proceed.",
        ],
      },
    ],
    process: [
      {
        title: "Understand the business",
        text: "Review sites, bills, contracts, usage, equipment, budgets and operational plans.",
      },
      {
        title: "Compare the right options",
        text: "Assess suitable suppliers, technologies, finance routes and delivery constraints.",
      },
      {
        title: "Put the plan in place",
        text: "Coordinate the approved contract or project and keep responsibilities and dates visible.",
      },
      {
        title: "Continue reviewing",
        text: "Track renewals, performance and new opportunities as the organisation changes.",
      },
    ],
    faqs: [
      {
        question: "Can consultancy cover procurement and projects?",
        answer:
          "Yes. Keeping contracts, consumption, generation and capital projects together can improve sequencing and expose dependencies.",
      },
      {
        question: "Is consultancy only for large organisations?",
        answer:
          "No. The scope can fit a single site, multi-site portfolio or one specific commercial decision.",
      },
      {
        question: "Do we need to use every SwitchZero service?",
        answer:
          "No. The review should identify what is relevant and commercially justified, not force a generic package.",
      },
      {
        question: "What should we provide first?",
        answer:
          "Recent bills, contract end dates, operating information and a clear explanation of planned changes are the strongest starting point.",
      },
    ],
    ctaTitle: "Want us to review the whole energy position?",
    ctaText:
      "Bring the current contracts, bills and planned changes. We will help organise the decisions into a clear commercial plan.",
  },
};
