SELECT 
    [name]
      ,[email]
      ,[password]
      ,[role]
      FROM [dbo].[users]
WHERE [email]=@email