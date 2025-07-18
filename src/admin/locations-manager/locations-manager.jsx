import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from "react-bootstrap";
import Swal from "sweetalert2";

const LocationsManager = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [locations, setLocations] = useState({});
  const [newLocation, setNewLocation] = useState("");

  useEffect(() => {
    const defaultCities = {
      0: "Mumbai",
      1: "Delhi",
      2: "Bengaluru",
      3: "Hyderabad",
      4: "Chennai",
      5: "Kolkata",
      6: "Ahmedabad",
      7: "Pune",
      8: "Jaipur",
      9: "Lucknow"
    };

    setLocations(defaultCities);
  }, []);

  const handleAddNewButton = () => {
    const trimmedLocation = newLocation.trim();
    if (!trimmedLocation) return;

    const newIndex = Object.keys(locations).length;

    setLocations(prev => ({
      ...prev,
      [newIndex]: trimmedLocation
    }));

    setNewLocation("");
  };

  const handleRemoveButton = (keyToRemove) => {
    const filtered = Object.entries(locations)
      .filter(([key]) => key !== keyToRemove)
      .map(([_, value], idx) => [idx, value]);

    const reIndexed = Object.fromEntries(filtered);
    setLocations(reIndexed);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocations(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveChangesSubmit = (e) => {
    e.preventDefault();

    const cleanedLocations = Object.entries(locations)
      .filter(([_, value]) => value && value.trim())
      .map(([_, value], index) => [index, value.trim()]);

    const finalLocations = Object.fromEntries(cleanedLocations);

    setLocations(finalLocations);

    Swal.fire("Changes saved (in memory only)", "Firebase save skipped due to permission.", "success");
  };

  return (
    <div>
      <h1>Locations Management (Local Only)</h1>
      <Form onSubmit={handleSaveChangesSubmit}>
        <div className="d-grid gap-2 p-3">
          {
            locations && !isLoading ? (
              <>
                <h2>Edit Cities</h2>
                {
                  Object.entries(locations).map(([key, value]) => (
                    <div key={key} className="my-2">
                      <InputGroup>
                        <Form.Control
                          type="text"
                          name={key}
                          value={value || ""}
                          onChange={handleInputChange}
                          placeholder="Location..."
                        />
                        <Button variant="danger" onClick={() => handleRemoveButton(key)}>Remove</Button>
                      </InputGroup>
                    </div>
                  ))
                }

                <div className="my-2">
                  <h2>Add New City</h2>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      value={newLocation}
                      onChange={e => setNewLocation(e.target.value)}
                      placeholder="Location..."
                    />
                    <Button variant="primary" type="button" onClick={handleAddNewButton}>Add</Button>
                  </InputGroup>
                </div>

                <Button variant="success" type="submit">Save All Changes (Simulated)</Button>
              </>
            ) : (
              <p>Loading...</p>
            )
          }
        </div>
      </Form>
    </div>
  );
};

export default LocationsManager;
