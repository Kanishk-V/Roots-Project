import { NextResponse } from 'next/server';

// Mock data for now - we'll replace this with real database queries later
const mockData = {
  totalListings: 156,
  assumableListings: 42,
  averagePrice: 450000,
  priceDistribution: [
    { range: '0-250k', count: 15 },
    { range: '250k-500k', count: 45 },
    { range: '500k-750k', count: 55 },
    { range: '750k-1M', count: 25 },
    { range: '1M+', count: 16 },
  ],
  listingAgeDistribution: [
    { range: '0-7 days', count: 25 },
    { range: '8-14 days', count: 35 },
    { range: '15-30 days', count: 45 },
    { range: '31-60 days', count: 30 },
    { range: '60+ days', count: 21 },
  ],
  assumableMortgageStats: {
    averageInterestRate: 3.25,
    averageBalance: 320000,
    totalValue: 13440000,
  },
  recentUpdates: [
    { id: 1, type: 'New Listing', address: '123 Main St', timestamp: '2024-02-20T10:00:00Z' },
    { id: 2, type: 'Price Change', address: '456 Oak Ave', timestamp: '2024-02-20T09:30:00Z' },
    { id: 3, type: 'Status Update', address: '789 Pine Rd', timestamp: '2024-02-20T09:00:00Z' },
  ],
};

export async function GET() {
  // In a real implementation, we would:
  // 1. Connect to the database
  // 2. Run aggregation queries
  // 3. Process and format the data
  // 4. Handle errors appropriately
  
  return NextResponse.json(mockData);
} 