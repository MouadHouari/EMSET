INSERT INTO [dbo].[users]
    (
        [name]
      ,[email]
      ,[password]
      ,[role]
    )
VALUES 
    (
        @name,
        @email,
        @password,
        @role
    )

SELECT SCOPE_IDENTITY() AS userId