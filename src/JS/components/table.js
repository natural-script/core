import React from "react";
import basicComponent from "core/basicComponent";
import Radium from "radium";
import mdtable2json from "mdtable2json";
import * as Material from "@material-ui/core";
class table extends basicComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.useStyles = Material.makeStyles(theme => ({
      root: {
        marginTop: theme.spacing(3),
        overflowX: "auto"
      },
      table: {
        minWidth: 650
      }
    }));
  }
  thisComponent = () => {
    const state = this.getState();
    const styles = this.getStyles();
    const classes = this.useStyles();
    const data = mdtable2json.getTables(state.data)[0];
    return (
      <Material.Paper
        ref={this.myRef}
        className={classes.root}
        style={styles}
        {...this.getEvents()}
      >
        <Material.Table className={classes.table}>
          <Material.TableHead>
            <Material.TableRow>
              {data.headers.map(header => (
                <Material.TableCell>{header}</Material.TableCell>
              ))}
            </Material.TableRow>
          </Material.TableHead>
          <Material.TableBody>
            {data.json.map(row => (
              <Material.TableRow>
                {Object.values(row).map(cellValue => (
                  <Material.TableCell>{cellValue}</Material.TableCell>
                ))}
              </Material.TableRow>
            ))}
          </Material.TableBody>
        </Material.Table>
      </Material.Paper>
    );
  };
}

export default Radium(table);
