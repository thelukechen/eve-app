interface PowerConsumptionBreakdown {
  nuclear: number;
  geothermal: number;
  biomass: number;
  coal: number;
  wind: number;
  solar: number;
  hydro: number;
  gas: number;
  oil: number;
  unknown: number;
  'hydro discharge': number;
  'battery discharge': number;
}

export interface ApiResponse {
  updatedAt: string;
  createdAt: string;
  powerConsumptionBreakdown: PowerConsumptionBreakdown;
  fossilFreePercentage: number;
  renewablePercentage: number;
  powerConsumptionTotal: number;
  zone: string;
}

export const fetchData = async (): Promise<ApiResponse | null> => {
  try {
    const response = await fetch('https://api-access.electricitymaps.com/free-tier/power-breakdown/latest', {
      method: 'GET',
      headers: {
        'auth-token': 'E1pG5YG950MCbbyqy7h0w9bCNI4Jwifa'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("Get Latest Power Breakdown API Response Status: " + response.status);
    const json: ApiResponse = await response.json();
    return json;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
