mockSearchData = searchExport();
mockDetailData = detailExport();

function mockFetch(url) {
    return new Promise((resolve, reject) => {
        // Simulate network delay
        setTimeout(() => {
            try {
                // Parse URL to extract parameters
                const urlParams = new URL(url);
                const searchParams = urlParams.searchParams;
                
                // Check for search parameter
                const searchTitle = searchParams.get('s');
                const imdbId = searchParams.get('i');

                let resultData;

                if (searchTitle) {
                    // Filter search results by title (case-insensitive, partial match)
                    resultData = {
                        Search: mockSearchData.Search.filter(movie => 
                            movie.Title.toLowerCase().includes(searchTitle.toLowerCase())
                        ),
                        totalResults: mockSearchData.Search.filter(movie => 
                            movie.Title.toLowerCase().includes(searchTitle.toLowerCase())
                        ).length
                    };
                } else if (imdbId) {
                    // Find details by imdbID
                    resultData = mockDetailData.find(movie => movie.imdbID === imdbId);
                    
                    // If no match found, you might want to handle this case
                    if (!resultData) {
                        throw new Error('Movie not found');
                    }
                } else {
                    // If no valid parameters are provided
                    throw new Error('Invalid search parameters');
                }

                // Create response object mimicking fetch response
                const response = {
                    ok: true,
                    status: 200,
                    json: () => Promise.resolve(resultData)
                };

                resolve(response);
            } catch (error) {
                // Create an error response
                const errorResponse = {
                    ok: false,
                    status: 404,
                    json: () => Promise.resolve({ Error: error.message })
                };

                resolve(errorResponse);
            }
        }, 500); // Simulate network delay
    });
}