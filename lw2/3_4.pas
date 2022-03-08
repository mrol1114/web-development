PROGRAM Greetings(INPUT, OUTPUT);
USES DOS;
FUNCTION GetQueryStringParameter(Key: STRING): STRING;
VAR
  QueryString: STRING[100];
  CurPos, StringLength, NumberOfCharacters: INTEGER;
  Ch, NotKey: CHAR;
BEGIN
  QueryString := GetEnv('QUERY_STRING');
  StringLength := Length(QueryString);
  IF Pos(Key, QueryString) = 0
  THEN
    GetQueryStringParameter := 'key not found'
  ELSE
    BEGIN
      NumberOfCharacters := 0;
      CurPos := Pos(Key, QueryString);
      Ch := QueryString[CurPos];
      NotKey := 'F';
      WHILE ((Ch <> '=') AND (Ch <> ' ') AND (StringLength >= CurPos) AND (NotKey <> 'T')) 
      DO
        BEGIN
          IF (Ch = '&')
          THEN
            NotKey := 'T';
          CurPos := CurPos + 1;
          Ch := QueryString[CurPos]
        END;
      IF (NotKey = 'F')
      THEN
        BEGIN
          CurPos := CurPos + 1;
          Ch := QueryString[CurPos];
          WHILE ((Ch <> '&') AND (Ch <> ' ') AND (StringLength >= CurPos))
          DO
            BEGIN
              NumberOfCharacters := NumberOfCharacters + 1;
              CurPos := CurPos + 1;
              Ch := QueryString[CurPos]
            END;
          GetQueryStringParameter := Copy(QueryString, CurPos - NumberOfCharacters, NumberOfCharacters)
        END
      ELSE
        GetQueryStringParameter := 'key not found'
    END 
END;
BEGIN
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'));
  WRITELN('Number: ', GetQueryStringParameter('number'))
END.