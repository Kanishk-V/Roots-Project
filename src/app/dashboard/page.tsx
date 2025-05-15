'use client';

import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Card,
  CardBody,
  CardHeader,
  SimpleGrid,
  Stack,
  Stat,
  StatLabel,
  StatValue,
  StatHelpText,
} from '@chakra-ui/react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

import { useState, useEffect } from 'react';

// Mock data - will be replaced with API call
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
  marketDuration: [
    { range: '0-7 days', count: 20 },
    { range: '8-14 days', count: 30 },
    { range: '15-30 days', count: 40 },
    { range: '31-60 days', count: 25 },
    { range: '60+ days', count: 10 },
  ],
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState(mockData);

  useEffect(() => {
    // We'll fetch real data here later
    setDashboardData(mockData);
  }, []);

  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={6}>Listings Dashboard</Heading>
      
      {/* Quick Stats Section */}
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mb={8}>
        <Box borderWidth="1px" borderRadius="lg" p={4}>
          <Stack>
            <Text fontSize="sm" color="gray.500">Total Listings</Text>
            <Text fontSize="2xl" fontWeight="bold">{dashboardData.totalListings}</Text>
            <Text fontSize="sm" color="gray.500">Active listings in database</Text>
          </Stack>
        </Box>
        
        <Box borderWidth="1px" borderRadius="lg" p={4}>
          <Stack>
            <Text fontSize="sm" color="gray.500">Assumable Listings</Text>
            <Text fontSize="2xl" fontWeight="bold">{dashboardData.assumableListings}</Text>
            <Text fontSize="sm" color="gray.500">Listings with assumable mortgages</Text>
          </Stack>
        </Box>
        
        <Box borderWidth="1px" borderRadius="lg" p={4}>
          <Stack>
            <Text fontSize="sm" color="gray.500">Average Price</Text>
            <Text fontSize="2xl" fontWeight="bold">${dashboardData.averagePrice.toLocaleString()}</Text>
            <Text fontSize="sm" color="gray.500">Across all listings</Text>
          </Stack>
        </Box>
      </SimpleGrid>

      {/* Main Dashboard Grid */}
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
        gap={6}
      >
        {/* Price Distribution Chart */}
        <GridItem>
          <Box borderWidth="1px" borderRadius="lg" p={4}>
            <Heading size="md" mb={4}>Price Distribution</Heading>
            <Box h="300px" display="flex" alignItems="center" justifyContent="center">
              <BarChart
                width={400}
                height={250}
                data={dashboardData.priceDistribution}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </Box>
          </Box>
        </GridItem>

        {/* Listing Age Chart */}
        <GridItem>
          <Box borderWidth="1px" borderRadius="lg" p={4}>
            <Heading size="md" mb={4}>Listing Age Distribution</Heading>
            <Box h="300px" display="flex" alignItems="center" justifyContent="center">
              <LineChart
                width={400}
                height={250}
                data={dashboardData.listingAgeDistribution}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
              </LineChart>
            </Box>
          </Box>
        </GridItem>

        {/* Assumable Mortgage Details */}
        <GridItem>
          <Box borderWidth="1px" borderRadius="lg" p={4}>
            <Heading size="md" mb={4}>Assumable Mortgage Analysis</Heading>
            <Box h="300px" display="flex" alignItems="center" justifyContent="center">
              <Text color="gray.500">Assumable mortgage details will be added here</Text>
            </Box>
          </Box>
        </GridItem>

        {/* Listing Updates Timeline */}
        <GridItem>
          <Box borderWidth="1px" borderRadius="lg" p={4}>
            <Heading size="md" mb={4}>Recent Listing Updates</Heading>
            <Box h="300px" display="flex" alignItems="center" justifyContent="center">
              <Text color="gray.500">Updates timeline will be added here</Text>
            </Box>
          </Box>
        </GridItem>

        {/* Market Duration Chart */}
        <GridItem>
          <Box borderWidth="1px" borderRadius="lg" p={4}>
            <Heading size="md" mb={4}>Market Duration</Heading>
            <Box h="300px" display="flex" alignItems="center" justifyContent="center">
              <BarChart
                width={400}
                height={250}
                data={dashboardData.marketDuration}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#82ca9d" />
              </BarChart>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
} 