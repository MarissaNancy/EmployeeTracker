DB create 

then tables
employee//create last
role//second
department //first

CONSTRAINT FK_TempSales_SalesReason FOREIGN KEY (TempID) REFERENCES Sales.SalesReason (SalesReasonID) ON DELETE CASCADE
